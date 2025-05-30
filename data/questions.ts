// 标准版题目
const standard = [
  // E/I 维度 (23题)
  {
    id: 1,
    text: "当你参加一个社交聚会时，你会倾向于：",
    options: ["与很多人交谈，享受热闹的氛围", "与少数几个人深入交流"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 2,
    text: "当需要放松时，你更喜欢：",
    options: ["独自阅读、思考或从事个人爱好", "与朋友聚会或参加社交活动"],
    dimension: "EI",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 3,
    text: "在社交场合中，你更倾向于：",
    options: ["主动发起对话并参与讨论", "等待他人发起对话"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 4,
    text: "当你和朋友相处时，你更倾向于：",
    options: ["同时和多个朋友一起活动", "和一两个亲密朋友深入交流"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 5,
    text: "当你参加一个新的活动时，你会：",
    options: ["主动与许多人交流", "先观察，然后与少数人交流"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 6,
    text: "当你面对压力时，你会：",
    options: ["独自思考和处理", "与他人交谈以获得支持"],
    dimension: "EI",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 7,
    text: "在社交场合中，你通常会：",
    options: ["感到精力充沛并享受社交", "感到需要独处来恢复精力"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 8,
    text: "当你有空闲时间时，你更倾向于：",
    options: ["独自思考或从事个人爱好", "参加社交活动或与朋友聚会"],
    dimension: "EI",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 9,
    text: "你更倾向于：",
    options: ["在行动中思考", "在思考后行动"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 10,
    text: "你更倾向于：",
    options: ["独立工作", "在团队中工作"],
    dimension: "EI",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 11,
    text: "在社交场合中，你通常会：",
    options: ["主动发起对话并与人交流", "等待他人与你交流"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 12,
    text: "当你需要放松时，你更喜欢：",
    options: ["独自安静地度过", "参加社交活动或聚会"],
    dimension: "EI",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 13,
    text: "当你面对压力时，你会：",
    options: ["与他人交谈以缓解压力", "独自思考和处理"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 14,
    text: "在社交场合中，你通常会：",
    options: ["感到精力充沛并享受社交", "感到需要独处来恢复精力"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 15,
    text: "当你有空闲时间时，你更倾向于：",
    options: ["独自思考或从事个人爱好", "参加社交活动或与朋友聚会"],
    dimension: "EI",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 16,
    text: "你更倾向于：",
    options: ["在行动中思考", "在思考后行动"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 17,
    text: "你更倾向于：",
    options: ["独立工作", "在团队中工作"],
    dimension: "EI",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 18,
    text: "在社交场合中，你通常会：",
    options: ["主动发起对话并与人交流", "等待他人与你交流"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 19,
    text: "当你需要放松时，你更喜欢：",
    options: ["独自安静地度过", "参加社交活动或聚会"],
    dimension: "EI",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 20,
    text: "当你面对压力时，你会：",
    options: ["与他人交谈以缓解压力", "独自思考和处理"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 21,
    text: "在社交场合中，你通常会：",
    options: ["感到精力充沛并享受社交", "感到需要独处来恢复精力"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 22,
    text: "当你有空闲时间时，你更倾向于：",
    options: ["独自思考或从事个人爱好", "参加社交活动或与朋友聚会"],
    dimension: "EI",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 23,
    text: "你更倾向于：",
    options: ["在行动中思考", "在思考后行动"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },

  // S/N 维度 (23题)
  {
    id: 24,
    text: "当你思考问题时，更倾向于：",
    options: ["关注抽象概念和未来可能性", "关注具体细节和当前现实"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 25,
    text: "你更倾向于相信：",
    options: ["自己的直接经验", "自己的直觉和灵感"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 26,
    text: "当你遇到问题时，通常会：",
    options: ["寻找创新的解决方案", "应用已有的经验和方法"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 27,
    text: "你更喜欢学习：",
    options: ["具体的事实和细节", "抽象的理论和概念"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 28,
    text: "你更倾向于：",
    options: ["思考未来的可能性", "关注当前的现实情况"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 29,
    text: "你更倾向于关注：",
    options: ["实际的、现实的细节", "潜在的意义和联系"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 30,
    text: "你更倾向于：",
    options: ["关注宏观的概念和模式", "关注具体的事实和数据"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 31,
    text: "你更倾向于：",
    options: ["关注现实和实际的情况", "关注未来的可能性和愿景"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 32,
    text: "当你学习新事物时，你更喜欢：",
    options: ["理解整体概念和原理", "掌握具体的步骤和细节"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 33,
    text: "你更倾向于相信：",
    options: ["实际的经验和证据", "直觉和灵感"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 34,
    text: "你更倾向于关注：",
    options: ["抽象的概念和理论", "具体的事实和细节"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 35,
    text: "当你学习新技能时，你更喜欢：",
    options: ["通过实践和练习学习", "通过理解原理和概念学习"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 36,
    text: "你更倾向于：",
    options: ["思考未来的可能性", "关注当前的现实"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 37,
    text: "你更倾向于：",
    options: ["关注实际的细节", "关注抽象的概念"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 38,
    text: "你更倾向于相信：",
    options: ["直觉和灵感", "实际的经验和证据"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 39,
    text: "你更倾向于：",
    options: ["关注现实和实际的情况", "关注未来的可能性和愿景"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 40,
    text: "当你学习新事物时，你更喜欢：",
    options: ["理解整体概念和原理", "掌握具体的步骤和细节"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 41,
    text: "你更倾向于相信：",
    options: ["实际的经验和证据", "直觉和灵感"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 42,
    text: "你更倾向于关注：",
    options: ["抽象的概念和理论", "具体的事实和细节"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 43,
    text: "当你学习新技能时，你更喜欢：",
    options: ["通过实践和练习学习", "通过理解原理和概念学习"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 44,
    text: "你更倾向于：",
    options: ["思考未来的可能性", "关注当前的现实"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 45,
    text: "你更倾向于：",
    options: ["关注实际的细节", "关注抽象的概念"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 46,
    text: "你更倾向于相信：",
    options: ["直觉和灵感", "实际的经验和证据"],
    dimension: "SN",
    weight: 1.5,
    isReversed: true
  },

  // T/F 维度 (23题)
  {
    id: 47,
    text: "在做决策时，你更看重：",
    options: ["逻辑和理性分析", "人情和他人感受"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 48,
    text: "在团队合作中，你更倾向于：",
    options: ["关注团队成员的感受和需求", "关注任务的完成和效率"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 49,
    text: "当需要做一个重要决定时，你通常会：",
    options: ["冷静分析各种可能性", "考虑决定对他人的影响"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 50,
    text: "当你收到反馈时，你更倾向于：",
    options: ["关注反馈中的情感和人际关系方面", "关注反馈中的事实和改进建议"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 51,
    text: "在解决问题时，你更看重：",
    options: ["公平和客观性", "和谐和人际关系"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 52,
    text: "在团队中，你更倾向于扮演：",
    options: ["协调者和支持者", "决策者和组织者"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 53,
    text: "在做决定时，你更倾向于：",
    options: ["基于逻辑和分析", "基于价值观和情感"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 54,
    text: "在团队讨论中，你更倾向于：",
    options: ["提出客观的分析和建议", "考虑团队成员的感受和需求"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 55,
    text: "当你做决策时，更看重：",
    options: ["决策对他人的影响", "决策的逻辑性和公正性"],
    dimension: "TF",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 56,
    text: "在团队中，你更看重：",
    options: ["良好的人际关系和团队和谐", "高效率和明确的目标"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 57,
    text: "当你需要解决一个复杂问题时，你会：",
    options: ["分析问题的各个方面并寻找逻辑解决方案", "考虑问题对相关人员的影响"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 58,
    text: "在团队合作中，你更看重：",
    options: ["团队成员之间的和谐与支持", "任务的高效完成和质量"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 59,
    text: "当你面对批评时，你会：",
    options: ["分析批评并寻找改进的方法", "感到受伤并可能需要时间处理情绪"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 60,
    text: "在团队中，你更倾向于：",
    options: ["支持和鼓励团队成员", "提出挑战和改进建议"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 61,
    text: "在做决策时，你更看重：",
    options: ["逻辑和理性", "情感和价值观"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 62,
    text: "在团队讨论中，你更倾向于：",
    options: ["提出客观的分析和建议", "考虑团队成员的感受和需求"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 63,
    text: "当你做决策时，更看重：",
    options: ["决策对他人的影响", "决策的逻辑性和公正性"],
    dimension: "TF",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 64,
    text: "在团队中，你更看重：",
    options: ["良好的人际关系和团队和谐", "高效率和明确的目标"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 65,
    text: "当你需要解决一个复杂问题时，你会：",
    options: ["分析问题的各个方面并寻找逻辑解决方案", "考虑问题对相关人员的影响"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 66,
    text: "在团队合作中，你更看重：",
    options: ["团队成员之间的和谐与支持", "任务的高效完成和质量"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 67,
    text: "当你面对批评时，你会：",
    options: ["分析批评并寻找改进的方法", "感到受伤并可能需要时间处理情绪"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 68,
    text: "在团队中，你更倾向于：",
    options: ["支持和鼓励团队成员", "提出挑战和改进建议"],
    dimension: "TF",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 69,
    text: "在做决策时，你更看重：",
    options: ["逻辑和理性", "情感和价值观"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },

  // J/P 维度 (24题)
  {
    id: 70,
    text: "面对新的计划或任务，你通常会：",
    options: ["提前规划并制定详细的步骤", "保持灵活并根据情况调整"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 71,
    text: "当你有空闲时间时，通常会：",
    options: ["随心所欲地做自己喜欢的事", "提前安排好活动或计划"],
    dimension: "JP",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 72,
    text: "在生活中，你更看重：",
    options: ["秩序和确定性", "自由和灵活性"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 73,
    text: "在做计划时，你通常会：",
    options: ["制定详细的计划并严格执行", "制定一个大致的计划并保留调整空间"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 74,
    text: "当你需要完成一项任务时，你通常会：",
    options: ["尽早开始并确保按时完成", "在截止日期前集中精力完成"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 75,
    text: "你更喜欢生活：",
    options: ["有计划和有条理", "灵活和开放"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 76,
    text: "当你有一个想法时，你更倾向于：",
    options: ["与他人分享并获取反馈", "先完善想法再分享"],
    dimension: "JP",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 77,
    text: "你更倾向于：",
    options: ["提前计划和组织", "灵活应对和适应变化"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 78,
    text: "在做计划时，你通常会：",
    options: ["制定详细的计划并严格执行", "制定一个大致的计划并根据情况调整"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 79,
    text: "在面对新环境时，你会：",
    options: ["适应并探索新环境", "寻找熟悉的模式和结构"],
    dimension: "JP",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 80,
    text: "当你做决定时，更倾向于：",
    options: ["尽快做出决定并继续前进", "保持开放的选择并收集更多信息"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 81,
    text: "你更倾向于：",
    options: ["灵活适应变化", "喜欢稳定和可预测性"],
    dimension: "JP",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 82,
    text: "当你有一个目标时，你通常会：",
    options: ["制定详细的计划并坚持执行", "有一个大致的方向并根据情况调整"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 83,
    text: "你更倾向于：",
    options: ["有明确的计划和目标", "保持开放和灵活"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 84,
    text: "当你有一个想法时，你更倾向于：",
    options: ["与他人分享并获取反馈", "先完善想法再分享"],
    dimension: "JP",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 85,
    text: "你更倾向于：",
    options: ["提前计划和组织", "灵活应对和适应变化"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 86,
    text: "在做计划时，你通常会：",
    options: ["制定详细的计划并严格执行", "制定一个大致的计划并根据情况调整"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 87,
    text: "在面对新环境时，你会：",
    options: ["适应并探索新环境", "寻找熟悉的模式和结构"],
    dimension: "JP",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 88,
    text: "当你做决定时，更倾向于：",
    options: ["尽快做出决定并继续前进", "保持开放的选择并收集更多信息"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 89,
    text: "你更倾向于：",
    options: ["灵活适应变化", "喜欢稳定和可预测性"],
    dimension: "JP",
    weight: 1.2,
    isReversed: true
  },
  {
    id: 90,
    text: "当你有一个目标时，你通常会：",
    options: ["制定详细的计划并坚持执行", "有一个大致的方向并根据情况调整"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 91,
    text: "你更倾向于：",
    options: ["有明确的计划和目标", "保持开放和灵活"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 92,
    text: "当你有一个想法时，你更倾向于：",
    options: ["与他人分享并获取反馈", "先完善想法再分享"],
    dimension: "JP",
    weight: 1.5,
    isReversed: true
  },
  {
    id: 93,
    text: "你更倾向于：",
    options: ["提前计划和组织", "灵活应对和适应变化"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
]

// 专业版题目
const professional = [
  // 包含标准版的所有题目
  ...standard,
  // 额外添加52道题目
  // E/I 维度 (额外13题)
  {
    id: 94,
    text: "在团队讨论中，你更倾向于：",
    options: ["主动分享自己的想法和观点", "先倾听他人的想法，再决定是否分享"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 95,
    text: "当你需要解决一个问题时，你更倾向于：",
    options: ["与他人讨论并寻求建议", "独自思考并找到解决方案"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 96,
    text: "在社交场合中，你更倾向于：",
    options: ["成为谈话的中心", "在边缘观察和倾听"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 97,
    text: "当你感到压力时，你更倾向于：",
    options: ["寻求他人的支持和安慰", "独自处理并恢复"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 98,
    text: "在团队项目中，你更倾向于：",
    options: ["积极参与讨论和决策", "专注于完成分配的任务"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 99,
    text: "当你需要学习新知识时，你更倾向于：",
    options: ["通过与他人讨论来学习", "通过阅读和思考来学习"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 100,
    text: "在社交场合中，你更倾向于：",
    options: ["主动认识新朋友", "等待他人主动接近"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 101,
    text: "当你有一个想法时，你更倾向于：",
    options: ["立即与他人分享", "先完善后再分享"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 102,
    text: "在团队中，你更倾向于：",
    options: ["主动承担领导角色", "作为团队成员参与"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 103,
    text: "当你需要做决定时，你更倾向于：",
    options: ["与他人讨论后再决定", "独自思考后决定"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 104,
    text: "在社交场合中，你更倾向于：",
    options: ["参与多个小组的对话", "与一两个人深入交谈"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 105,
    text: "当你需要放松时，你更倾向于：",
    options: ["参加社交活动", "独自休息和恢复"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 106,
    text: "在团队中，你更倾向于：",
    options: ["主动提出建议和想法", "等待他人询问你的意见"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },

  // S/N 维度 (额外13题)
  {
    id: 107,
    text: "当你面对一个新项目时，你更倾向于：",
    options: ["关注项目的创新性和可能性", "关注项目的具体实施细节"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 108,
    text: "你更倾向于相信：",
    options: ["直觉和灵感", "经验和事实"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 109,
    text: "当你解决问题时，你更倾向于：",
    options: ["寻找创新的解决方案", "使用已知的有效方法"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 110,
    text: "你更倾向于关注：",
    options: ["事物的象征意义和深层含义", "事物的表面特征和具体表现"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 111,
    text: "当你学习新知识时，你更倾向于：",
    options: ["理解概念和原理", "掌握具体的事实和数据"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 112,
    text: "你更倾向于：",
    options: ["关注未来的可能性", "关注当前的现实"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 113,
    text: "当你做决定时，你更倾向于：",
    options: ["相信直觉和灵感", "依靠经验和数据"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 114,
    text: "你更倾向于：",
    options: ["关注抽象的概念和理论", "关注具体的事实和细节"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 115,
    text: "当你面对新情况时，你更倾向于：",
    options: ["寻找新的可能性", "参考过去的经验"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 116,
    text: "你更倾向于：",
    options: ["关注事物的象征意义", "关注事物的实际用途"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 117,
    text: "当你学习新技能时，你更倾向于：",
    options: ["理解原理和概念", "掌握具体步骤"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 118,
    text: "你更倾向于：",
    options: ["关注未来的发展", "关注当前的状况"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 119,
    text: "当你做决定时，你更倾向于：",
    options: ["相信直觉和灵感", "依靠经验和数据"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },

  // T/F 维度 (额外13题)
  {
    id: 120,
    text: "在团队中，你更倾向于：",
    options: ["关注团队成员的感受和需求", "关注任务的目标和效率"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 121,
    text: "当你做决定时，你更看重：",
    options: ["决策对人际关系的影响", "决策的客观性和公正性"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 122,
    text: "在解决问题时，你更倾向于：",
    options: ["考虑他人的感受和需求", "寻找最有效的解决方案"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 123,
    text: "你更倾向于：",
    options: ["关注他人的情感需求", "关注事实和逻辑"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 124,
    text: "在团队讨论中，你更倾向于：",
    options: ["关注团队氛围和和谐", "关注讨论的效率和结果"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 125,
    text: "当你面对冲突时，你更倾向于：",
    options: ["寻求和谐和妥协", "坚持原则和公平"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 126,
    text: "你更倾向于：",
    options: ["关注他人的感受", "关注客观事实"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 127,
    text: "在团队中，你更看重：",
    options: ["良好的人际关系", "高效的工作成果"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 128,
    text: "当你做决定时，你更倾向于：",
    options: ["考虑他人的感受", "考虑客观事实"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 129,
    text: "在解决问题时，你更倾向于：",
    options: ["寻求和谐和共识", "寻找最有效的解决方案"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 130,
    text: "你更倾向于：",
    options: ["关注他人的情感需求", "关注任务的目标和效率"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 131,
    text: "在团队中，你更倾向于：",
    options: ["支持和鼓励他人", "提出挑战和改进建议"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 132,
    text: "当你面对批评时，你更倾向于：",
    options: ["关注批评的情感影响", "关注批评的客观内容"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },

  // J/P 维度 (额外13题)
  {
    id: 133,
    text: "当你面对新项目时，你更倾向于：",
    options: ["制定详细的计划", "保持灵活和开放"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 134,
    text: "你更倾向于：",
    options: ["有明确的计划和目标", "保持开放和灵活"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 135,
    text: "当你做决定时，你更倾向于：",
    options: ["尽快做出决定", "保持开放的选择"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 136,
    text: "你更倾向于：",
    options: ["喜欢确定性和计划", "喜欢灵活性和变化"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 137,
    text: "当你面对新环境时，你更倾向于：",
    options: ["寻找熟悉的模式和结构", "适应并探索新环境"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 138,
    text: "你更倾向于：",
    options: ["提前计划和组织", "灵活应对和适应变化"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 139,
    text: "当你有一个目标时，你更倾向于：",
    options: ["制定详细的计划", "保持灵活和开放"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 140,
    text: "你更倾向于：",
    options: ["喜欢确定性和计划", "喜欢灵活性和变化"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 141,
    text: "当你做决定时，你更倾向于：",
    options: ["尽快做出决定", "保持开放的选择"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 142,
    text: "你更倾向于：",
    options: ["有明确的计划和目标", "保持开放和灵活"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 143,
    text: "当你面对新项目时，你更倾向于：",
    options: ["制定详细的计划", "保持灵活和开放"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 144,
    text: "你更倾向于：",
    options: ["喜欢确定性和计划", "喜欢灵活性和变化"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 145,
    text: "当你面对新环境时，你更倾向于：",
    options: ["寻找熟悉的模式和结构", "适应并探索新环境"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
]

// 完整版题目
const complete = [
  // 包含标准版和专业版的所有题目
  ...standard,
  ...professional.slice(standard.length),
  // 额外添加55道题目
  // E/I 维度 (额外14题)
  {
    id: 146,
    text: "在社交场合中，你更倾向于：",
    options: ["主动与他人交流", "等待他人来接近你"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 147,
    text: "你更喜欢：",
    options: ["与多人一起活动", "独自或与少数人相处"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 148,
    text: "在团队中，你更倾向于：",
    options: ["主动承担领导责任", "作为团队成员参与"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 149,
    text: "当你需要放松时，你更倾向于：",
    options: ["参加社交活动", "独自休息和恢复"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 150,
    text: "在社交场合中，你更倾向于：",
    options: ["主动认识新朋友", "等待他人主动接近"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 151,
    text: "当你有一个想法时，你更倾向于：",
    options: ["立即与他人分享", "先完善后再分享"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 152,
    text: "在团队中，你更倾向于：",
    options: ["主动提出建议和想法", "等待他人询问你的意见"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 153,
    text: "当你需要做决定时，你更倾向于：",
    options: ["与他人讨论后再决定", "独自思考后决定"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 154,
    text: "在社交场合中，你更倾向于：",
    options: ["参与多个小组的对话", "与一两个人深入交谈"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 155,
    text: "当你需要放松时，你更倾向于：",
    options: ["参加社交活动", "独自休息和恢复"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 156,
    text: "在团队中，你更倾向于：",
    options: ["主动承担领导角色", "作为团队成员参与"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 157,
    text: "当你需要表达意见时，你更倾向于：",
    options: ["直接表达自己的想法", "先观察他人反应再表达"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 158,
    text: "在社交场合中，你更倾向于：",
    options: ["主动组织活动并邀请他人", "等待他人邀请并参与"],
    dimension: "EI",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 159,
    text: "当你有一个想法时，你更倾向于：",
    options: ["立即与他人分享", "先完善后再分享"],
    dimension: "EI",
    weight: 1.2,
    isReversed: false
  },

  // S/N 维度 (额外14题)
  {
    id: 160,
    text: "当你面对新项目时，你更倾向于：",
    options: ["关注项目的创新性和可能性", "关注项目的具体实施细节"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 161,
    text: "你更倾向于相信：",
    options: ["直觉和灵感", "经验和事实"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 162,
    text: "当你解决问题时，你更倾向于：",
    options: ["寻找创新的解决方案", "使用已知的有效方法"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 163,
    text: "你更倾向于关注：",
    options: ["事物的象征意义和深层含义", "事物的表面特征和具体表现"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 164,
    text: "当你学习新知识时，你更倾向于：",
    options: ["理解概念和原理", "掌握具体的事实和数据"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 165,
    text: "你更倾向于：",
    options: ["关注未来的可能性", "关注当前的现实"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 166,
    text: "当你做决定时，你更倾向于：",
    options: ["相信直觉和灵感", "依靠经验和数据"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 167,
    text: "你更倾向于：",
    options: ["关注抽象的概念和理论", "关注具体的事实和细节"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 168,
    text: "当你面对新情况时，你更倾向于：",
    options: ["寻找新的可能性", "参考过去的经验"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 169,
    text: "你更倾向于：",
    options: ["关注事物的象征意义", "关注事物的实际用途"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 170,
    text: "当你学习新技能时，你更倾向于：",
    options: ["理解原理和概念", "掌握具体步骤"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 171,
    text: "你更倾向于：",
    options: ["关注未来的发展", "关注当前的状况"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 172,
    text: "当你做决定时，你更倾向于：",
    options: ["相信直觉和灵感", "依靠经验和数据"],
    dimension: "SN",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 173,
    text: "你更倾向于：",
    options: ["关注抽象的概念和理论", "关注具体的事实和细节"],
    dimension: "SN",
    weight: 1.2,
    isReversed: false
  },

  // T/F 维度 (额外14题)
  {
    id: 174,
    text: "在团队中，你更倾向于：",
    options: ["关注团队成员的感受和需求", "关注任务的目标和效率"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 175,
    text: "当你做决定时，你更看重：",
    options: ["决策对人际关系的影响", "决策的客观性和公正性"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 176,
    text: "在解决问题时，你更倾向于：",
    options: ["考虑他人的感受和需求", "寻找最有效的解决方案"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 177,
    text: "你更倾向于：",
    options: ["关注他人的情感需求", "关注事实和逻辑"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 178,
    text: "在团队讨论中，你更倾向于：",
    options: ["关注团队氛围和和谐", "关注讨论的效率和结果"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 179,
    text: "当你面对冲突时，你更倾向于：",
    options: ["寻求和谐和妥协", "坚持原则和公平"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 180,
    text: "你更倾向于：",
    options: ["关注他人的感受", "关注客观事实"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 181,
    text: "在团队中，你更看重：",
    options: ["良好的人际关系", "高效的工作成果"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 182,
    text: "当你做决定时，你更倾向于：",
    options: ["考虑他人的感受", "考虑客观事实"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 183,
    text: "在解决问题时，你更倾向于：",
    options: ["寻求和谐和共识", "寻找最有效的解决方案"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 184,
    text: "你更倾向于：",
    options: ["关注他人的情感需求", "关注任务的目标和效率"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 185,
    text: "在团队中，你更倾向于：",
    options: ["支持和鼓励他人", "提出挑战和改进建议"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 186,
    text: "当你面对批评时，你更倾向于：",
    options: ["关注批评的情感影响", "关注批评的客观内容"],
    dimension: "TF",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 187,
    text: "你更倾向于：",
    options: ["关注他人的感受", "关注客观事实"],
    dimension: "TF",
    weight: 1.2,
    isReversed: false
  },

  // J/P 维度 (额外13题)
  {
    id: 188,
    text: "当你面对新项目时，你更倾向于：",
    options: ["制定详细的计划", "保持灵活和开放"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 189,
    text: "你更倾向于：",
    options: ["有明确的计划和目标", "保持开放和灵活"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 190,
    text: "当你做决定时，你更倾向于：",
    options: ["尽快做出决定", "保持开放的选择"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 191,
    text: "你更倾向于：",
    options: ["喜欢确定性和计划", "喜欢灵活性和变化"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 192,
    text: "当你面对新环境时，你更倾向于：",
    options: ["寻找熟悉的模式和结构", "适应并探索新环境"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 193,
    text: "你更倾向于：",
    options: ["提前计划和组织", "灵活应对和适应变化"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 194,
    text: "当你有一个目标时，你更倾向于：",
    options: ["制定详细的计划", "保持灵活和开放"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 195,
    text: "你更倾向于：",
    options: ["喜欢确定性和计划", "喜欢灵活性和变化"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 196,
    text: "当你做决定时，你更倾向于：",
    options: ["尽快做出决定", "保持开放的选择"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 197,
    text: "你更倾向于：",
    options: ["有明确的计划和目标", "保持开放和灵活"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 198,
    text: "当你面对新项目时，你更倾向于：",
    options: ["制定详细的计划", "保持灵活和开放"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
  {
    id: 199,
    text: "你更倾向于：",
    options: ["喜欢确定性和计划", "喜欢灵活性和变化"],
    dimension: "JP",
    weight: 1.2,
    isReversed: false
  },
  {
    id: 200,
    text: "当你面对新环境时，你更倾向于：",
    options: ["寻找熟悉的模式和结构", "适应并探索新环境"],
    dimension: "JP",
    weight: 1.5,
    isReversed: false
  },
]

export const questions = {
  standard,
  professional,
  complete,
}
