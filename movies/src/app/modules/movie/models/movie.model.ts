export class Movie {
    public id: number;
    public name: string;
    public imagePath: string;
    public description: string;

    constructor(id: number, name: string, imagePath: string, description: string) {
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.description = description;
    }

}
