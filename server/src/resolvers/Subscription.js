function newLinkSubscribe(parent, args, context, info) {
  const val = context.prisma.$subscribe
    .link({ mutation_in: ["CREATED"] })
    .node();
  console.log(val);
  return val;
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => {
    console.log(payload);
    return payload;
  }
};

function newVoteSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.vote({ mutation_in: ["CREATED"] }).node();
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => {
    return payload;
  }
};

module.exports = {
  newLink,
  newVote
};
