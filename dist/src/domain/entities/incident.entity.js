"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incident = void 0;
class Incident {
    constructor(title, description, status, createdDate) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdDate = createdDate;
    }
}
exports.Incident = Incident;
