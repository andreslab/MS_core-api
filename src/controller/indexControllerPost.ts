import { Request, response, Response } from  'express';

class IndexControllerPost {
    public saveInfo (req:Request, res: Response){

        const data = req.body;
        console.log(data);

        res.writeHead(200, {"Content-Type": "application/json"});
        var json = JSON.stringify({
            anObject:{item1: "item1", item2:"item2"},
            anArray: ["item1", "item2"],
            another: "item"
        });
        res.end(json);
    }

    public saveInfoFromOtherModule (req:Request, res: Response){
        
        const name = req.params.name;
        const data = req.body;

        console.log(name);

        res.writeHead(200, {"Content-Type": "application/json"});
        var json = JSON.stringify({
            anObject:{item1: "item1", item2:"item2"},
            anArray: ["item1", "item2"],
            another: "item"
        });
        res.end(json);


        /*
        
        const https = require('https');
        const options = {
            host: 'pokeapi.co',
            path: '/api/v2/pokemon/ditto',
            method: "GET",
            headers: {
                "Accept": "application/json"
            }

        };
        let request = https.request(options, (res: Response) => {
            if (res.statusCode !== 200){
                console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
                res.send('Error');
                return;
            }
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('close', () => {
                console.log('Retrieved all data');
                console.log(JSON.parse(data));
            });
        });

        request.end();

        request.on('error', (err: Error) => {
            console.error(`Encountered an error trying to make a request: ${err.message}`);
          });

          */
    }

    public saveInfoFromDB (req:Request, res: Response){
        
        const data = req.body;
        
        const https = require('https');
        const options = {
            host: '0.0.0.0:2000',
            path: '/getinfo',
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json; charset=UTF-8"
            }

        };
        const request = https.request(options, (res: Response) => {
            if (res.statusCode !== 201) {
              console.error(`Did not get a Created from the server. Code: ${res.statusCode}`);
              res.send('Error');
              return;
            }
          
            let data = '';
          
            res.on('data', (chunk) => {
              data += chunk;
            });
          
            res.on('close', () => {
              console.log('Added new user');
              console.log(JSON.parse(data));
            });
          });

        
        const requestData = {
            name: 'New User',
            username: 'digitalocean',
            email: 'user@digitalocean.com',
            address: {
            street: 'North Pole',
            city: 'Murmansk',
            zipcode: '12345-6789',
            }
        };
        
        request.write(JSON.stringify(requestData));

        request.end();

        request.on('error', (err: Error) => {
        console.error(`Encountered an error trying to make a request: ${err.message}`);
        });
    }
}

export const indexControllerPost = new IndexControllerPost();