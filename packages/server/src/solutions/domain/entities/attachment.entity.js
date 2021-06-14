"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var graphql_1 = require("@nestjs/graphql");
var Attachment = /** @class */ (function () {
    function Attachment() {
    }
    ;
    __decorate([
        typeorm_1.ObjectIdColumn(),
        graphql_1.Field(function (type) { return String; })
    ], Attachment.prototype, "attachment_id");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column()
    ], Attachment.prototype, "url");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column()
    ], Attachment.prototype, "filename");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column()
    ], Attachment.prototype, "encoding");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column()
    ], Attachment.prototype, "mimetype");
    __decorate([
        graphql_1.Field(function (type) { return Date; }),
        typeorm_1.CreateDateColumn()
    ], Attachment.prototype, "created_at");
    __decorate([
        graphql_1.Field(function (type) { return Date; }),
        typeorm_1.UpdateDateColumn()
    ], Attachment.prototype, "updated_at");
    Attachment = __decorate([
        typeorm_1.Entity({ name: 'attachments' }),
        graphql_1.ObjectType()
    ], Attachment);
    return Attachment;
}());
exports.Attachment = Attachment;
