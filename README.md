#rest-contatos

#####Um service node.js simples para projetos mobile da Caelum(Contatos) - https://www.caelum.com.br/

Um simples webservice para **Node.js** utilizando **Mongo(com mongoose)** para projetos feitos da **CAELUM**.

#####Configuração
1 - Instale o Mongo DB.
2 - Coloque o Mongo para Rodar em sua máquina.
3 - Instale das dependências com npm: body-parser, express, mongoose, mocha, node-restful, nodemon(optional), debug(optional).
	Algumas dependências são opcionais e estavam sendo utilizadas para alguns testes unitários. Mais info em(package.json).
4 - Rode o service.js com o comando node ou nodemon.
5 - Utilize sua app ou um REST Client para consumir o webservice. 

##Serviços

###Contatos

```
GET /api/contacts HTTP/1.1
```
###### Retorna todos os Contatos existentes no DB de contatos.

```javascript
[ {"_id":"558d8e191fd63eb00553013a","name":"Baron of Hell","phone":"00 00000","email":"baronofhell@hell.com","address":"3819 Town Crossing Mesquite, TX 75150","site":"www.idsoftware.com/","latitude":32.7953128,"longitude":-96.6540494,"image":" R0lGODlhewDbAIcAAAAAAB8XCxcPB0tLS////(ALGUNS OUTROS MILHARES DE CARACTERES)","__v":0}, {"_id":"558d8e191fd63eb00553013b","name":"Hell Knight","phone":"00 00011","email":"hellknight@hell.com","address":"3819 Town Crossing Mesquite, TX 75150","site":"www.idsoftware.com/","latitude":32.7953128,"longitude":-96.6540494,"image":" R0lGODlhewDbAIcAAAAAAB8XCxcPB0tLS////(ALGUNS OUTROS MILHARES DE CARACTERES)","__v":0} ]
```

```
GET /api/contacts/SOMEIDHERE HTTP/1.1
```
###### Retorna um usuário do Banco com um id específico. 
exemplo: GET /api/contacts/558d8e191fd63eb00553013a HTTP/1.1

```javascript
{"_id":"558d8e191fd63eb00553013a","name":"Baron of Hell","phone":"00 00000","email":"baronofhell@hell.com","address":"3819 Town Crossing Mesquite, TX 75150","site":"www.idsoftware.com/","latitude":32.7953128,"longitude":-96.6540494,"image":" R0lGODlhewDbAIcAAAAAAB8XCxcPB0tLS////(ALGUNS OUTROS MILHARES DE CARACTERES)","__v":0}
```

```
POST /api/contacts HTTP/1.1
```

###### Adiciona um contato novo ao banco.

Nome     | Tipo   | Descrição      
-------- | ------ | -------------------------------------:
name     | String | Nome do Contato 
phone    | String | Phone do Contato      
email    | String | Email do Contato      
address  | String | Endereço do Contato
site     | String | Site do Contato
latitude | Number | Latitude do Endereço para API do Maps
longitude| Number | Longitude do Endereço para API do Maps
image	 | String | Imagem convertida em Base64           


```javascript
{
"name":"Baron of Hell",
"phone":"00 00000",
"email":"baronofhell@hell.com",
"address":"3819 Town Crossing Mesquite, TX 75150",
"site":"www.idsoftware.com/",
"latitude":32.7953128,
"longitude":-96.6540494,
"image":" R0lGODlhewDbAIcAAAAAAB8XCxcPB0tLS////(ALGUNS OUTROS MILHARES DE CARACTERES)"
}
```

```
DELETE /api/contacts/SOMEIDHERE HTTP/1.1
```

###### Deleta um contato do banco, utilizando seu ID.
exemplo: DELETE /api/contacts/558d8e191fd63eb00553013a HTTP/1.1
```
PUT /api/contacts/SOMEIDHERE HTTP/1.1
```

###### Altera um contato do banco, utilizando seu ID.
exemplo: PUT /api/contacts/558d8e191fd63eb00553013a HTTP/1.1

```javascript
{
"name":"Baron of Hell",
"phone":"00 00000",
"email":"baronofhell@hell.com",
"address":"3819 Town Crossing Mesquite, TX 75150",
"site":"www.idsoftware.com/",
"latitude":32.7953128,
"longitude":-96.6540494,
"image":" R0lGODlhewDbAIcAAAAAAB8XCxcPB0tLS////(ALGUNS OUTROS MILHARES DE CARACTERES)"
}
```

###### ENG

#rest-contatos

#####A simple **Node.js** service for **Caelum mobile projects(Contacts)** - https://www.caelum.com.br/

#####Configuration
1 - Install MongoDB.
2 - Run Mongo at you machine.
3 - Install the dependencies with npm: body-parser, express, mongoose, mocha, node-restful, nodemon(optional), debug(optional).
	Some dependencies are optional, and were being used to create some Unit Tests. More info at(package.json).
4 - Run service.js with node or nodemon command.
5 - Use a REST Client to consume the Webservice.

##Services

###Contacts

```
GET /api/contacts HTTP/1.1
```

###### Return all contacts from the DB.

```javascript
[ {"_id":"558d8e191fd63eb00553013a","name":"Baron of Hell","phone":"00 00000","email":"baronofhell@hell.com","address":"3819 Town Crossing Mesquite, TX 75150","site":"www.idsoftware.com/","latitude":32.7953128,"longitude":-96.6540494,"image":" R0lGODlhewDbAIcAAAAAAB8XCxcPB0tLS////(ALGUNS OUTROS MILHARES DE CARACTERES)","__v":0}, {"_id":"558d8e191fd63eb00553013b","name":"Hell Knight","phone":"00 00011","email":"hellknight@hell.com","address":"3819 Town Crossing Mesquite, TX 75150","site":"www.idsoftware.com/","latitude":32.7953128,"longitude":-96.6540494,"image":" R0lGODlhewDbAIcAAAAAAB8XCxcPB0tLS////(ALGUNS OUTROS MILHARES DE CARACTERES)","__v":0} ]
```

```
GET /api/contacts/SOMEIDHERE HTTP/1.1
```
###### Return one user from DB with one specific ID. 
example: GET /api/contacts/558d8e191fd63eb00553013a HTTP/1.1

```javascript
{"_id":"558d8e191fd63eb00553013a","name":"Baron of Hell","phone":"00 00000","email":"baronofhell@hell.com","address":"3819 Town Crossing Mesquite, TX 75150","site":"www.idsoftware.com/","latitude":32.7953128,"longitude":-96.6540494,"image":" R0lGODlhewDbAIcAAAAAAB8XCxcPB0tLS////(ALGUNS OUTROS MILHARES DE CARACTERES)","__v":0}
```

```
POST /api/contacts HTTP/1.1
```

###### ADD one new contact to the DB.

Name     | Type   | Description      
-------- | ------ | -------------------------------------:
name     | String | Name of the Contact 
phone    | String | Phone of the Contact      
email    | String | Email of the Contact      
address  | String | Address of the Contact
site     | String | Site of the Contact
latitude | Number | Latitude of the Address for Maps API
longitude| Number | Longitude of the Address for Maps API
image	 | String | Image converted to Base64           

```javascript
{
"name":"Baron of Hell",
"phone":"00 00000",
"email":"baronofhell@hell.com",
"address":"3819 Town Crossing Mesquite, TX 75150",
"site":"www.idsoftware.com/",
"latitude":32.7953128,
"longitude":-96.6540494,
"image":" R0lGODlhewDbAIcAAAAAAB8XCxcPB0tLS////(ALGUNS OUTROS MILHARES DE CARACTERES)"
}
```

```
DELETE /api/contacts/SOMEIDHERE HTTP/1.1
```
###### Delete one user of the DB, using it's ID. 
example: DELETE /api/contacts/558d8e191fd63eb00553013a HTTP/1.1
```
PUT /api/contacts/SOMEIDHERE HTTP/1.1
```
###### Alter one user of the DB, using it's ID. 
example: PUT /api/contacts/558d8e191fd63eb00553013a HTTP/1.1

```javascript
{
"name":"Baron of Hell",
"phone":"00 00000",
"email":"baronofhell@hell.com",
"address":"3819 Town Crossing Mesquite, TX 75150",
"site":"www.idsoftware.com/",
"latitude":32.7953128,
"longitude":-96.6540494,
"image":" R0lGODlhewDbAIcAAAAAAB8XCxcPB0tLS////(ALGUNS OUTROS MILHARES DE CARACTERES)"
}
```
-----------------------------
#Todo:
###### Create new and better set of Unit Tests for this little services.
-----------------------------
```java
/* :D There are some references to DOOM(the game) at this code and
 * documentation :), it's only for fun, including the port of the  
 * server.js. Sorry if you got ofended with the references, they  
 * are only here for fun.

- Cain.Alchemist**/
```