# Loja_API
 

Simples Api de loja, Onde temos a parte de Produtos, com a criação, listagem, exclusão de atualização, os clientes o cadastro dos clientes, as ordens para fazer os pedidos e a criação de usuarios, divididos, por user que são os clientes que poderão fazer suas compras, e os admins que fazem a modificação dos produtos.

#Tecnologias
Foi usado o JavaScript, com o Express para a criação da Api, para a autenticação foi usado o JWT, e a senha encriptografada com o md5. O sistema é simples, uma forma de estudo, logo não tem uma grande complexidade, foi utilizado o Banco de Dados MongooDB, pois com o mongoose.Schema você ja define os schmes do banco de dados ao adicionar os produtos, facilitando a criação do banco de dados, alem de conseguir adicionar mais informações em um unico coleção.

#Funcionamento
Ao baixar o sistema é so fazer a instalação do npm install, para instalar os modulos presentes.

O banco de dados você pode fazer a troca do caminho na pasta src em config, na parte mostrada abaixo:
![banco de dados](https://user-images.githubusercontent.com/48532322/205678583-a33839ec-c9e8-4d79-8674-3e1a4f088be7.png)

E ao enviar os dados as coleções são criadas automaticamente, no banco de dados.

O sistema esta configurado para ouvir a porta que esteja aberta ou tradicional 3000

#As Rotas

#Produtos:
Para fazer mudanças nos produtos, como excluir, criar e atualizar é necessário ser administrador.
Para isso é criado um token quando é feito o login e com esse token libera  o acesso ou não, dependendo da função.

Para cirar um produtos é preciso:
{
	"title": "",
	"description": "  ",
	"slug": "",
	"price": "",
	"active": true,
	"tags": [""]
}


Rotas:

Criar os produtos:
post('product/')

Lista todos os produtos:
get('/product/')

Lista setor do produto:
get('/product/:slug')

Listar pelo id do produto:
get('/product/admin/:id')

Lista pelas caracteristicas do produto:
get('/product/tags/:tag')

Atualizar os produtos:
put('/product/:id')

Excluir os produtos:
delete('/product/')


#Ordens: 

Para criar uma Ordem será:
{
	"items": [
		{
			"quantity": "",
			"price": "",
			"product": ""
		}
	]
}

O product é o id do produto.


Criar
post('/order/')

Lista
get('/order/')

#Customer

para criar o usuario é preciso de:
{
	"name": "Pablo Vinícius",
	"email": "PabloV@gmail.com",
	"password": "Ellaine",
	"roles": ""
}

A roles padrão é para cliente, se quiser administrador precisa adicionar

Para autenticar precisa
{
	"email": "",
	"password": ""
}

Para criar o usuario
post('customer/')

Para autenticar
post('customer/authenticate')

Para atualizar o token
post('customer/refreshToken')


#Observação

Se Falto algum dado ajude, avisando para eu possa acrescentar e ir apredendo sobre criar há documentação.

