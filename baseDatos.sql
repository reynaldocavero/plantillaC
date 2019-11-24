create table cliente(
id int primary key identity(1,1) not null,
cliente varchar(128) not null,
numeroDoc varchar(11) not null,
activo int not null
)

alter procedure spCliente
@xml as xml
as
begin
declare @_nun varchar(11) = '';
	SELECT 
      @_nun= T.Item.value('numdoc[1]',  'varchar(11)')
FROM   @xml.nodes('Clientes/Cliente') AS T(Item)
if @_nun <> ''
begin
select id,cliente,numeroDoc,activo from cliente  where numeroDoc=@_nun;
end

end

--insert into cliente values('reynaldo','20101010106',1)
--insert into cliente values('maria','20202020206',1)
--exec spCliente '20101010106'

create table vendedor(
id int primary key identity(1,1) not null,
vendedor varchar(128) not null,
numeroDoc varchar(11) not null,
activo int not null
)


alter procedure spVendedor
@xml as xml
as
begin
declare @_ven varchar(11) = '';
	SELECT 
      @_ven= T.Item.value('nombre[1]',  'varchar(128)')
FROM   @xml.nodes('Vendedores/Vendedor') AS T(Item)
if @_ven <> ''
begin
select id,vendedor,numeroDoc,activo from vendedor  where vendedor like '%'+@_ven+'%';
end

end

insert into vendedor values('xxx','12121212',1)
insert into vendedor values('ppp','33333333',1)
insert into vendedor values('xiomara','12121112',1)
exec spVendedor '<Vendedores><Vendedor><nombre>x</nombre></Vendedor></Vendedores>'


create table producto(
id int primary key identity(1,1) not null,
descripcion varchar(128) not null,
precio decimal(9,2) not null,
stock int not null,
activo int not null
)

alter procedure spProducto
@xml as xml
as
begin




select id,descripcion,precio,stock,activo from producto;


end


insert into producto values('pera','12.30',10,1);
insert into producto values('lucuma','15.02',20,1);
insert into producto values('melon','22.03',50,1);

exec spProducto '<Productos><Producto><descripcion></descripcion></Producto></Productos>'
