import * as express from "express";
import * as bodyParser from "body-parser"
import { Config } from "../config";
import { user } from "../api/user";

export class NetWork {
    private static instance : NetWork;

    static getInstance () : NetWork {
        if (!NetWork.instance){
            NetWork.instance = new NetWork ();
        }
        return NetWork.instance;
    }

    run(): void {
        const httpconf = Config.getInstance().get()["portal"];
        const port : number = httpconf ["port"];

        var app = express();

        // setup body-parser.
        app.use(bodyParser.text({type: '*/*'}));

        // setup routes.
        app.use('/api/user', user);

        // start  listen server.
        app.listen(port, function () {
          console.log(`Example app listening on port ${port}!`)
        })
    }
}