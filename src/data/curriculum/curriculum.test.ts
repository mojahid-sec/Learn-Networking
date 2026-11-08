import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  ALL_CURRICULUM_MODULES, 
  getCurriculumStats, 
  getCurriculumModuleById,
  getCurriculumModuleByLevel,
  getTopicById,
  searchTopics,
  CURRICULUM_TIERS
} from './index';

test('curriculum has all 12 progressive levels', () => {
  assert.equal(ALL_CURRICULUM_MODULES.length, 12);
  
  // Verify sequential level numbers 1 to 12
  ALL_CURRICULUM_MODULES.forEach((mod, idx) => {
    assert.equal(mod.levelNumber, idx + 1);
    assert.ok(mod.titleEn.includes(`LEVEL ${idx + 1 < 10 ? '0' : ''}${idx + 1}`));
    assert.ok(mod.topics.length >= 8, `Module ${mod.id} should have at least 8 topics`);
    assert.ok(mod.estimatedHours > 0);
  });
});

test('curriculum tiers cover all 4 difficulty levels', () => {
  assert.equal(CURRICULUM_TIERS.length, 4);
  const tierNames = CURRICULUM_TIERS.map(t => t.tier);
  assert.deepEqual(tierNames, ['Beginner', 'Elementary', 'Intermediate', 'Advanced']);

  const totalTierModules = CURRICULUM_TIERS.reduce((sum, t) => sum + t.modules.length, 0);
  assert.equal(totalTierModules, 12);
});

test('all topics possess mandatory bilingual metadata and visual learning plans', () => {
  const stats = getCurriculumStats();
  assert.ok(stats.totalTopics >= 150, `Expected at least 150 topics across 12 levels, found ${stats.totalTopics}`);
  assert.equal(stats.totalModules, 12);
  assert.ok(stats.totalEstimatedHours >= 150);

  ALL_CURRICULUM_MODULES.forEach(mod => {
    mod.topics.forEach(topic => {
      assert.ok(topic.id.length > 0, 'Topic ID must not be empty');
      assert.ok(topic.titleEn.length > 0, 'Topic titleEn must not be empty');
      assert.ok(topic.titleBn.length > 0, 'Topic titleBn must not be empty');
      assert.ok(topic.summaryEn.length > 0, 'Topic summaryEn must not be empty');
      assert.ok(topic.summaryBn.length > 0, 'Topic summaryBn must not be empty');
      assert.ok(topic.keyConcepts.length > 0, 'Key concepts must not be empty');
      assert.ok(topic.durationMinutes > 0, 'Topic duration must be positive');
      
      // Visual plan assertion
      assert.ok(topic.visualPlan, 'Every topic must have a VisualLearningPlan');
      assert.ok(topic.visualPlan.visualType, 'Visual plan must have a visualType');
      assert.ok(topic.visualPlan.descriptionEn.length > 10, 'Visual descriptionEn must be descriptive');
      assert.ok(topic.visualPlan.descriptionBn.length > 10, 'Visual descriptionBn must be descriptive');
    });
  });
});

test('topic lookup and search functions return accurate records', () => {
  const level07 = getCurriculumModuleByLevel(7);
  assert.ok(level07);
  assert.equal(level07?.id, 'level-07-routing');

  const bgpTopic = getTopicById('bgp-fundamentals');
  assert.ok(bgpTopic);
  assert.equal(bgpTopic?.titleEn.includes('BGP Fundamentals'), true);
  assert.equal(bgpTopic?.module.id, 'level-07-routing');

  // Search tests
  const ospfResults = searchTopics('OSPF');
  assert.ok(ospfResults.length >= 2, 'Should find multiple OSPF topics');

  const wiresharkResults = searchTopics('Wireshark');
  assert.ok(wiresharkResults.length >= 2, 'Should find Wireshark topics');

  const subnetResults = searchTopics('Subnetting');
  assert.ok(subnetResults.length >= 2, 'Should find Subnetting topics');
});
