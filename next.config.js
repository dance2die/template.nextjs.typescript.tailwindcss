// Move superjson from .babelrc to enable SWC for Next v12
// https://reposhub.com/javascript/misc/remorses-next-superjson.html

const { withSuperjson } = require("next-superjson");
module.exports = withSuperjson()({});
