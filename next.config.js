const { execSync } = require('child_process');

const gitCommand = 'git rev-parse HEAD';

module.exports = {
    generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return execSync(gitCommand).toString().trim();
    }
};
