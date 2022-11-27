function solution(skill, skill_trees) {
  let answer = 0;

  const skillArr = skill.split("");

  for (let i = 0; i < skill_trees.length; i++) {
    const obj = {};
    for (let j = 0; j < skillArr.length; j++) {
      obj[skillArr[j]] = skill_trees[i].indexOf(skillArr[j]);
    }

    let sortable = Object.entries(obj)
      .sort(([, a], [, b]) => a - b)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    for (let a in sortable) {
      if (sortable[a] === -1) {
        delete sortable[a];
      }
    }
    sortable = Object.keys(sortable);

    if (sortable.length === 0) {
      answer++;
    } else {
      if (sortable[0] === skill[0] && skill.includes(sortable.join(""))) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA", "AAAA"]));
