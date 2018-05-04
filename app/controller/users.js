class UserCtrl {
    async hello(ctx) {
        const user = ctx.request.query.user;
        ctx.ok({
            user
        });
    }
}

module.exports = new UserCtrl();