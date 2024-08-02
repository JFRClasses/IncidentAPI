export class Incident{
    public title: string;
    public description: string;
    public status: string;
    public createdDate: Date;

    constructor(title: string, description: string, status: string, createdDate: Date){
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdDate = createdDate;
    }
}