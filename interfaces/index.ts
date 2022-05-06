export interface IModal {
    modalActive : boolean;
    setModalActive : Function
}
interface Image{
    url : string
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

export interface ISkill{
    _id : string,
    name : string,
    experience : string,
    image : Image
}