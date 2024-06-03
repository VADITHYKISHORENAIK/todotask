const APIClient = require('./apiClient');

class UserValidation {
    static isFanCodeCity(user) {
        const lat = parseFloat(user.address.geo.lat);
        const lng = parseFloat(user.address.geo.lng);
        return lat >= -40 && lat <= 5 && lng >= 5 && lng <= 100;
    }

    static async completedTasksPercentage(userId) {
        const todos = await APIClient.getTodos(userId);
        const completed = todos.filter(todo => todo.completed);
        return (completed.length / todos.length) * 100;
    }

    static async validateFanCodeUsers() {
        const users = await APIClient.getUsers();
        for (const user of users) {
            if (this.isFanCodeCity(user)) {
                const percentage = await this.completedTasksPercentage(user.id);
                if (percentage <= 50) {
                    throw new Error(`User ${user.id} has less than 50% tasks completed`);
                }
            }
        }
    }
}

module.exports = UserValidation;
