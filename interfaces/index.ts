export interface IModal {
    modalActive : boolean;
    setModalActive : Function
}

export interface IProyecto {
    _id: string;
    name : string;
    description : string,
    usedSkills : string,
    repo : string,
    url : string,
    tech:string,
    image : Image
}
interface Image{
    url : string
}