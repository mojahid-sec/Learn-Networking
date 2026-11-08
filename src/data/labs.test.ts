import { test } from 'node:test';
import assert from 'node:assert';
import { labsData, DetailedLab } from './labsData';

test('labsData contains all 6 core categories', () => {
  assert.strictEqual(labsData.length, 6, 'Should have exactly 6 comprehensive labs');

  const categories = new Set(labsData.map(l => l.category));
  const expectedCategories = [
    'Basic Networking',
    'IP Addressing',
    'Windows Networking',
    'Linux & Kali Linux',
    'Routing & Switching',
    'Network Analysis (Wireshark)'
  ];

  for (const exp of expectedCategories) {
    assert.ok(categories.has(exp as any), `Missing expected lab category: ${exp}`);
  }
});

test('every lab implements the complete 14-section requirements', () => {
  labsData.forEach((lab: DetailedLab) => {
    // 1. Title & ID
    assert.ok(lab.id && lab.id.startsWith('lab-'), `${lab.id} has valid ID`);
    assert.ok(lab.titleEn && lab.titleBn, `${lab.id} has bilingual titles`);

    // 2. Difficulty & Time
    assert.ok(['Beginner', 'Intermediate', 'Advanced'].includes(lab.difficulty), `${lab.id} valid difficulty`);
    assert.ok(lab.timeEstimate && lab.timeEstimate.includes('mins'), `${lab.id} has time estimate`);
    assert.ok(lab.descEn && lab.descBn, `${lab.id} has bilingual descriptions`);

    // 3. Learning Objectives
    assert.ok(lab.learningObjectives.length >= 2, `${lab.id} has at least 2 learning objectives`);
    lab.learningObjectives.forEach(obj => {
      assert.ok(obj.en && obj.bn, `${lab.id} objective has both EN and BN`);
    });

    // 4. Required Tools
    assert.ok(lab.requiredTools.length >= 1, `${lab.id} specifies required tools`);

    // 5. Prerequisites
    assert.ok(lab.requiredKnowledge.length >= 1, `${lab.id} specifies required knowledge`);
    lab.requiredKnowledge.forEach(k => {
      assert.ok(k.en && k.bn, `${lab.id} prerequisite has both EN and BN`);
    });

    // 6. Network Topology
    assert.ok(lab.topology, `${lab.id} has network topology`);
    assert.ok(lab.topology.descriptionEn && lab.topology.descriptionBn, `${lab.id} topology has bilingual descriptions`);
    assert.ok(lab.topology.nodes.length >= 2, `${lab.id} topology has at least 2 nodes`);
    lab.topology.nodes.forEach(node => {
      assert.ok(node.name && node.role && node.ip, `${lab.id} node has name, role, ip`);
    });

    // 7, 8, 9, 10. Steps with Instructions, Commands, Expected Output and Explanations
    assert.ok(lab.steps.length >= 1, `${lab.id} has at least 1 step`);
    lab.steps.forEach(step => {
      assert.ok(step.stepNumber > 0, `${lab.id} valid stepNumber`);
      assert.ok(step.titleEn && step.titleBn, `${lab.id} step bilingual title`);
      assert.ok(step.instructionsEn && step.instructionsBn, `${lab.id} step bilingual instructions`);
      assert.ok(step.commandSnippet, `${lab.id} step has commandSnippet`);
      assert.ok(step.expectedOutput, `${lab.id} step has expectedOutput`);
      assert.ok(step.outputExplanationEn && step.outputExplanationBn, `${lab.id} step has output explanation`);
    });

    // 11. Troubleshooting
    assert.ok(lab.troubleshooting.length >= 1, `${lab.id} has troubleshooting scenarios`);
    lab.troubleshooting.forEach(tb => {
      assert.ok(tb.symptomEn && tb.symptomBn && tb.resolutionEn && tb.resolutionBn, `${lab.id} troubleshooting bilingual`);
    });

    // 12. Common Mistakes
    assert.ok(lab.commonMistakes.length >= 1, `${lab.id} has common mistakes`);
    lab.commonMistakes.forEach(cm => {
      assert.ok(cm.mistakeEn && cm.mistakeBn && cm.correctionEn && cm.correctionBn, `${lab.id} common mistake bilingual`);
    });

    // 13. Practice Challenge
    assert.ok(lab.practiceChallenge, `${lab.id} has practice challenge`);
    assert.ok(lab.practiceChallenge.challengeEn && lab.practiceChallenge.challengeBn, `${lab.id} challenge bilingual`);
    assert.ok(lab.practiceChallenge.hintEn && lab.practiceChallenge.hintBn, `${lab.id} challenge hint bilingual`);
  });
});
