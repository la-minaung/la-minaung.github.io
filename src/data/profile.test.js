import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as data from './profile.js';

const { yearsOfExperience } = data;

// Career start is Oct 2022; months are 0-indexed in Date.
test('yearsOfExperience: counts whole years from Oct 2022', () => {
  assert.equal(yearsOfExperience(new Date(2023, 8, 30)), 0); // Sep 2023 -> 11 months
  assert.equal(yearsOfExperience(new Date(2023, 9, 1)), 1); //  Oct 2023
  assert.equal(yearsOfExperience(new Date(2026, 8, 30)), 3); // Sep 2026 -> 47 months
  assert.equal(yearsOfExperience(new Date(2026, 9, 1)), 4); //  Oct 2026 -> 48 months
  assert.equal(yearsOfExperience(new Date(2026, 9, 31)), 4);
  assert.equal(yearsOfExperience(new Date(2027, 9, 1)), 5);
});

test('yearsOfExperience: never negative before the start date', () => {
  assert.equal(yearsOfExperience(new Date(2020, 0, 1)), 0);
});

test('years constant matches the function', () => {
  assert.equal(data.years, yearsOfExperience());
});

// React list keys come from these fields; duplicates would silently break rendering.
const unique = (list, key, label) =>
  test(`unique keys: ${label}`, () => {
    const values = list.map((item) => (key ? item[key] : item));
    assert.equal(new Set(values).size, values.length, `duplicate in ${label}: ${values.join(', ')}`);
  });

unique(data.clients, null, 'clients');
unique(data.metrics, 'label', 'metrics');
unique(data.sortingFlow, 'label', 'sortingFlow');
unique(data.projects, 'client', 'projects');
unique(data.moreWork, 'client', 'moreWork');
unique(data.experience, 'company', 'experience');
unique(data.coreStack, 'title', 'coreStack');
unique(data.skillGroups, 'category', 'skillGroups');
unique(data.certificates, 'title', 'certificates');
unique(data.about.principles, 'title', 'about.principles');
unique(data.about.facts, 'label', 'about.facts');
data.projects.forEach((p) => {
  unique(p.bullets, null, `${p.client} bullets`);
  unique(p.flow, null, `${p.client} flow`);
  unique(p.tech, null, `${p.client} tech`);
});
data.skillGroups.forEach((g) => unique(g.skills, null, `${g.category} skills`));
data.experience.forEach((e) => {
  unique(e.tech, null, `${e.company} tech`);
  unique(e.highlights, null, `${e.company} highlights`);
});

test('projects are complete case studies', () => {
  for (const p of data.projects) {
    assert.ok(p.client && p.title && p.domain && p.impact, `${p.client}: missing text field`);
    assert.ok(p.bullets.length >= 3, `${p.client}: needs at least 3 bullets`);
    assert.ok(p.flow.length >= 3 && p.flow.length <= 5, `${p.client}: flow should have 3-5 steps`);
    assert.ok(p.tech.length > 0, `${p.client}: needs tech`);
    assert.match(p.period, /^\d{4}( – \d{4})?$/, `${p.client}: period "${p.period}" must be "YYYY" or "YYYY – YYYY"`);
  }
});

test('every sorting-flow icon key is one Hero knows about', () => {
  const known = new Set(['scan', 'database', 'cpu', 'split']);
  for (const step of data.sortingFlow) assert.ok(known.has(step.icon), `unknown icon "${step.icon}"`);
});

test('experience dates use "Mon YYYY"', () => {
  const fmt = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}$/;
  for (const e of data.experience) {
    assert.match(e.start, fmt, `${e.company} start`);
    assert.ok(e.end === 'Present' || fmt.test(e.end), `${e.company} end "${e.end}"`);
  }
});

test('contact details are well-formed', () => {
  assert.match(data.profile.email, /^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  assert.match(data.profile.phone, /^\+\d{8,15}$/);
  assert.match(data.profile.github, /^https:\/\//);
  assert.match(data.profile.linkedin, /^https:\/\//);
  assert.match(data.profile.resume, /^\/.+\.pdf$/);
});

// Guards against unreplaced template placeholders and accidental "undefined" / "NaN" text.
test('no placeholder text leaks into content', () => {
  const strings = [];
  const walk = (v) => {
    if (typeof v === 'string') strings.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  for (const [name, value] of Object.entries(data)) {
    if (typeof value !== 'function') walk(value);
    else assert.ok(name.length > 0);
  }
  const bad = strings.filter((s) => /\{[a-z]+\}|\bundefined\b|\bNaN\b|\bTODO\b|lorem ipsum/i.test(s));
  assert.deepEqual(bad, []);
  assert.ok(strings.length > 50, 'expected to scan the full content tree');
});
