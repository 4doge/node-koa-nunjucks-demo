exports.index = async (ctx) => {
  await ctx.render('index', {
    username: 'Vasyaaa',
  });
};
