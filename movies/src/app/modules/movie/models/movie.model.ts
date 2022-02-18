export class Movie {
    public id: number;
    public name: string;
    public imagePath: string;
    public description: string;
    public isFavorite: boolean;
    public rate: number;

    constructor(id: number, name: string, imagePath: string, description: string, isFavorite: boolean, rate: number) {
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.description = description;
        this.isFavorite = isFavorite;
        this.rate = rate;
    }

}
