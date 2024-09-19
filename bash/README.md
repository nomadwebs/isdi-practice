# BASH command line essentials 

Este es un archivo Readme.md que estamos creando en clase para aprender su utilidad. 


## A partir de aquí pondremos los comandos que hemos aprendido: 

### - pwd   
Ruta en la que nos encontramos  
(print working directory)

`Ejemplo`
```sh
$pwd
/Users/franciscosanchez/OneDrive/ISDI_CODERS
```

<br/>

### - ls	(Listar un directorio)

`Ejemplo`
```sh
$ ls
0. Introducción a Javascript	workspace
```

También podemos listar un directorio sin estar dentro de el. Por ejemplo, podemos ver lo que hay dentro de workspace si entrar en la carpeta haciendo lo siguiente:

`Ejemplo`
```sh
$ ls workspace
isdi-bootcamp-202409
```
Por último podemos visualizar los archivos ocultos haciendo uso del siguiente código:

```sh
$ ls workspace -a
.				.DS_Store			workspace
..				0. Introducción a Javascript
```
<br/>

### - cd	change directory 
Cambiar de directorio. 
Es tan sencillo como hacer uso del comando cd + el nombre del directorio al que queremos acceder. 

`Ejemplo`
```sh
$ cd workspace/
$ pwd
isdi-bootcamp-202409
```
<br/>

### - cd ../ <directorio>	(variante de navegación)

Para volver al directorio de atrás usaremos cd ..
Si hacemos cd ../<nombre-de-un-directorio> iremos hacia atras y entraremos en el nuevo directorio.

`Ejemplo`
```sh
cd ../<nombre-de-un-directorio>
```

<br/>

### - clear	limpiar la consola  (cmd + k)
Para limpiar la consola cuando estemos un poco liados. 

`Ejemplo`
```sh
$ clear
```

<br/>

### - touch	crear un fichero
 ejemplo: touch nombre_de_archivo.txt

`Ejemplo`
```sh
$ touch nombre_de_archivo.txt
```

<br/>

### - rm 	Eliminar archivos
Este comando elimina archivos. 
**OJO!!!! No pide confirmación y no hay papelera!!!**
Hay que eliminar archivos con mucho cuidado

`Ejemplo`
```sh
$ rm <nombre_del_archivo>
```
<br/>

### - rm -r 	Eliminar directorios y su contenido

Borrar recursivamente, esto borra una carpeta y todos los archivos en su interior de forma recursiva. 

Igual que el caso anterior, no pide confirmación ni hay forma de recuperar en caso de error.

`Ejemplo`
```sh
$ rm -r <nombre-del-directorio>
```
<br/>

### - rmdir	Borra una carpeta que está vacía 
El comando rmdir, se utiliza para eliminar una carpeta que está vacía. En caso que contenga archivos devolverá un error y no borrará la carpeta. 

`Ejemplo`
```sh
$ rmdir <nombre-de-la-carpeta>
```
<br/>

## - mkdir 	crear un directorio
El siguiente comando lo utilizaremos para crear un directorio

`Ejemplo`
```sh
$ rm -r <nombre-del-directorio>
```
<br/>

### - mv (renombrar y mover)	

El comando mv lo podemos usar para renombrar o mover archivos en función de la forma en la que lo utilicemos. 

`Ejemplo Renombrar`
```sh
$ mv <nombre-archivo-viejo> <nombre-archivo-nuevo>
```

- mv (para mover una carpeta y renombrarla)	mv carp-modificada nueva_carpeta/carp-modificada2

`Ejemplo mover`
En el siguiente ejemplo movemos y renombramos simultaneamente la carpeta "carp-modificada" a nueva_carpeta/carp-modificada2 (con un nuevo nombre). 
```sh
$ mv carp-modificada nueva_carpeta/carp-modificada2
```

<br/>

### - cp	Copiar ficheros o carpetas 
Copiar un archivo o carpeta en otro sitio

`Ejemplo`
```sh
$ cp <nombre-de-archivo-origen> <nombre-de-archivo-destino> 
```



### - git help	
Nos da todos los comando de git que podemos utilizar 

`Ejemplo`
```sh
$ git help
```

<br/>

### - man + comando
Nos muestra la documentación de un comando determinado. man + comando (ejemplo man rm)

`Ejemplo`
```sh
$ man ls
NAME
     ls – list directory contents

SYNOPSIS
     ls [-@ABCFGHILOPRSTUWabcdefghiklmnopqrstuvwxy1%,] [--color=when] [-D format] [file ...]

DESCRIPTION
     For each operand that names a file of a type other than directory, ls displays its name as well as any requested, associated information.  For
     each operand that names a file of type directory, ls displays the names of files contained within that directory, as well as any requested,
     associated information.
...
```

<br/>

### - cp	Copiar archivos o carpetas. 
Su nomenclatura es similar a la del mv (move), cp archivo/carpeta origen archivo/carpeta destino.

`Ejemplo`
```sh
$ cp <nombre-archivo-origen> <nombre-archivo-destino>
```

## Cierre del archivo 
Aquí damos por finalizado este manual. 

Supongamos que aquí le ponemos un poco mas de chicha. 



<br/>