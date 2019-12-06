export class Test{
    private password:string;
    private username:string;
    constructor(p:string,un:string){
        this.password=p;
        this.username=un;
    }
    public get _password():string{
        return this.password;
    }
    public set _password(value:string){
        this.password=value;
    }
    public get _username():string{
        return this.username;
    }
    public set _username(value:string){
        this.username=value;
    }
}