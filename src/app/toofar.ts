export class toofar{
    private id:number;
    private libelle:string;
    private img:string;
    private prix:number;
    private bool:boolean;
    private gender:string;
    private race:string;
    private dat:Date;

    constructor(i:number,l:string,im:string,p:number,b:boolean,g:string,r:string,d:Date){
        this.id=i;
        this.libelle=l;
        this.img=im;
        this.prix=p;
        this.bool=b;
        this.gender=g;
        this.race=r;
        this.dat=d;
    }
    public get _dat():any{
        return this.dat;
    }
    public set _dat(value:any){
        this.dat=value;
    }
    public get _id():number{
        return this.id;
    }
    public set _id(value:number){
        this.id=value;
    }
    public get _libelle():string{
        return this.libelle;
    }
    public set _libelle(value:string){
        this.libelle=value;
    }
    public get _img():string{
        return this.img;
    }
    public set _img(value:string){
        this.img=value;
    }
    public get _prix():number{
        return this.prix;
    }
    public set _prix(value:number){
        this.prix=value;
    }
    public get _bool():boolean{
        return this.bool;
    }
    public set _bool(value:boolean){
        this.bool=value;
    }
    public get _gender():string{
        return this.gender;
    }
    public set _gender(value:string){
        this.gender=value;
    }
    public get _race():string{
        return this.race;
    }
    public set _race(value:string){
        this.race=value;
    }
  

}