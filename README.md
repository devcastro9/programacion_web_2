# DISEÑO Y PROGRAMACIÓN WEB 2

## 1. ¿Que es esto?

Son las tareas de clase y practicas de diseño y programación web 2.

## 2. Forma de organización

Cada practica o tarea estara en una rama (branch) diferente.
Para el caso de ejercicios de clase:
  - ejercicio_1
  - ejercicio_2
  - ...
Para las prácticas:
  - practica_1
  - practica_2
  - ...

## 3. ¿Como manejo este repositorio?

Primero debes de tener instalado `git`

### 3.1. Windows

Debes [descargar git](https://git-scm.com/download/win) de ese enlace y proceder con la instalación.

### 3.2. Linux

Es muy sencillo, tenemos 2 casos:

#### Debian, Ubuntu y derivados

Procedemos con la instalación desde los repositorios:

`sudo apt install git`

#### RHEL, Fedora, CentOS y derivados

Procedemos con la instalación desde los repositorios:

`sudo dnf install git`

### 3.3. Descargando el repositorio

Nos ubicamos con la terminal en un directorio del sistema en el que alojaremos el proyecto, luego utilizamos la linea de comando:

`git clone https://github.com/orlandocastro671/programacion_web_2.git `

### 3.4. Cambiando entre ramas (branch)

Al clonar el repositorio, automaticamente nos hallamos en la rama principal "master".

`git status`

Lo que nos dara una salida por terminal:

`En la rama master
Tu rama está actualizada con 'origin/master' nada para hacer commit, el árbol de trabajo está limpio.`

Para ir por ejemplo a la practica 1 deberiamos hacer:

`git checkout practica_1`

Lo que nos da una salida por terminal:

`Cambiado a rama 'practica_1'
Tu rama está actualizada con 'origin/practica_1'.`

En el cual nos encontraremos con el codigo de la práctica 1.

