"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const accounts_controller_1 = __importDefault(require("./controllers/accounts.controller"));
const accounts_middleware_1 = __importDefault(require("./middlewares/accounts.middleware"));
class AccountsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'AccountsRoutes');
    }
    configureRoutes() {
        this.app.route(`/accounts`)
            .get(accounts_controller_1.default.listAccounts)
            .post(accounts_middleware_1.default.validateRequiredAccountBodyFields, accounts_middleware_1.default.validateClientExists, accounts_middleware_1.default.validateAccountRepeated, accounts_controller_1.default.createAccount);
        this.app.route(`/accounts/:accountNumber`)
            .all(accounts_middleware_1.default.validateAccountExists)
            .get(accounts_controller_1.default.getAccountById)
            .put(accounts_middleware_1.default.validateRequiredAccountBodyFields, accounts_controller_1.default.updateAccount)
            .delete(accounts_middleware_1.default.validateAccountExists, accounts_controller_1.default.removeAccount);
        this.app.route(`/accounts/:accountNumber/deposit`)
            .post(accounts_middleware_1.default.validateAccountExists, accounts_controller_1.default.deposit);
        this.app.route(`/accounts/:accountNumber/withdraw`)
            .post(accounts_middleware_1.default.validateAccountExists, accounts_controller_1.default.withdraw);
        this.app.route(`/accounts/:accountNumber/transfer`)
            .post(accounts_middleware_1.default.validateAccountExists, accounts_controller_1.default.transfer);
        return this.app;
    }
}
exports.AccountsRoutes = AccountsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY2NvdW50cy9hY2NvdW50cy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUNwRSw0RkFBbUU7QUFDbkUsNEZBQW1FO0FBR25FLE1BQWEsY0FBZSxTQUFRLHlDQUFrQjtJQUNsRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUN0QixHQUFHLENBQUMsNkJBQWtCLENBQUMsWUFBWSxDQUFDO2FBQ3BDLElBQUksQ0FDRCw2QkFBa0IsQ0FBQyxpQ0FBaUMsRUFDcEQsNkJBQWtCLENBQUMsb0JBQW9CLEVBQ3ZDLDZCQUFrQixDQUFDLHVCQUF1QixFQUMxQyw2QkFBa0IsQ0FBQyxhQUFhLENBQ25DLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQzthQUM3QixHQUFHLENBQUMsNkJBQWtCLENBQUMscUJBQXFCLENBQUM7YUFDN0MsR0FBRyxDQUFDLDZCQUFrQixDQUFDLGNBQWMsQ0FBQzthQUN0QyxHQUFHLENBQ0EsNkJBQWtCLENBQUMsaUNBQWlDLEVBQ3BELDZCQUFrQixDQUFDLGFBQWEsQ0FDbkM7YUFDQSxNQUFNLENBQ0gsNkJBQWtCLENBQUMscUJBQXFCLEVBQ3hDLDZCQUFrQixDQUFDLGFBQWEsQ0FDL0IsQ0FBQztRQUVsQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQzthQUNyQyxJQUFJLENBQ0QsNkJBQWtCLENBQUMscUJBQXFCLEVBQ3hDLDZCQUFrQixDQUFDLE9BQU8sQ0FDN0IsQ0FBQztRQUVkLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDO2FBQ3RDLElBQUksQ0FDRCw2QkFBa0IsQ0FBQyxxQkFBcUIsRUFDeEMsNkJBQWtCLENBQUMsUUFBUSxDQUM5QixDQUFDO1FBRWQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUM7YUFDdEMsSUFBSSxDQUNELDZCQUFrQixDQUFDLHFCQUFxQixFQUN4Qyw2QkFBa0IsQ0FBQyxRQUFRLENBQzlCLENBQUM7UUFFbEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQS9DRCx3Q0ErQ0MifQ==