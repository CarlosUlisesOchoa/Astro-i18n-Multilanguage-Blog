---
title: 'Primer post'
description: 'Este es el primer post'
pubDate: '2024-07-31T18:51:00.000Z'
previewImage: '/blog-placeholder-3.jpg'
reference: primer-post
tags: ['Pruebas', 'Relleno']
---

¡Hola, mundo! 🌍

Bienvenido a mi blog. Este es mi primer post, y estoy emocionado de compartir este viaje contigo. Ya sea que estés aquí por accidente o por curiosidad, me alegra que hayas encontrado tu camino a mi rincón en Internet.

## Por qué comencé este blog

Siempre he tenido una pasión por escribir y compartir ideas, pero hasta ahora, la mayoría las he guardado para mí. Comenzar este blog es mi forma de poner mis pensamientos ahí afuera, explorar temas que me interesan, y tal vez incluso ayudar a otros en el camino.

Aquí tienes un ejemplo de algunas sintaxis básicas de Markdown que pueden usarse al escribir contenido en Markdown en Astro.

## Encabezados

Los siguientes elementos HTML `<h1>`—`<h6>` representan seis niveles de encabezados de sección. `<h1>` es el nivel más alto de la sección, mientras que `<h6>` es el más bajo.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Párrafo

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Imágenes

#### Sintaxis

```markdown
![Texto alternativo](./ruta/completa/o/relativa/de/imagen)
```

#### Resultado

![blog placeholder](/blog-placeholder-about.jpg)

## Citas

El elemento de cita representa contenido citado de otra fuente, opcionalmente con una cita que debe estar dentro de un elemento `footer` o `cite`, y opcionalmente con cambios en línea como anotaciones y abreviaturas.

### Cita sin atribución

#### Sintaxis

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Nota** que puedes usar _sintaxis Markdown_ dentro de una cita.
```

#### Resultado

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Nota** que puedes usar _sintaxis Markdown_ dentro de una cita.

### Cita con atribución

#### Sintaxis

```markdown
> No te comuniques compartiendo memoria, comparte memoria comunicándote.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Resultado

> No te comuniques compartiendo memoria, comparte memoria comunicándote.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: La cita anterior es un extracto de la [charla](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike durante Gopherfest, el 18 de noviembre de 2015.

## Tablas

#### Sintaxis

```markdown
| Cursiva   | Negrita     | Código   |
| --------- | ----------- | -------- |
| _cursiva_ | **negrita** | `código` |
```

#### Resultado

| Cursiva   | Negrita     | Código   |
| --------- | ----------- | -------- |
| _cursiva_ | **negrita** | `código` |

## Bloques de código

#### Sintaxis

Podemos usar 3 acentos graves ``` en una nueva línea, escribir el fragmento de código y cerrar con 3 acentos graves en una nueva línea. Para resaltar la sintaxis específica del lenguaje, escribe el nombre del lenguaje después de los primeros 3 acentos graves, por ejemplo, html, javascript, css, markdown, typescript, txt, bash.

````markdown
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Documento de ejemplo HTML5</title>
  </head>
  <body>
    <p>Prueba</p>
  </body>
</html>
```
````

Resultado

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Documento de ejemplo HTML5</title>
  </head>
  <body>
    <p>Prueba</p>
  </body>
</html>
```

## Tipos de listas

### Lista ordenada

#### Sintaxis

```markdown
1. Primer ítem
2. Segundo ítem
3. Tercer ítem
```

#### Resultado

1. Primer ítem
2. Segundo ítem
3. Tercer ítem

### Lista desordenada

#### Sintaxis

```markdown
- Ítem de la lista
- Otro ítem
- Y otro ítem
```

#### Resultado

- Ítem de la lista
- Otro ítem
- Y otro ítem

### Lista anidada

#### Sintaxis

```markdown
- Fruta
  - Manzana
  - Naranja
  - Banana
- Lácteos
  - Leche
  - Queso

Lista mixta:

- Fruta
  1. Manzana
  2. Naranja
  3. Banana
- Lácteos
  1. Leche
  2. Queso

Lista mixta:

1. Fruta
   - Manzana
   - Naranja
   - Banana
2. Lácteos
   - Leche
   - Queso
```

#### Resultado

- Fruta
  - Manzana
  - Naranja
  - Banana
- Lácteos
  - Leche
  - Queso

Lista mixta:

- Fruta
  1. Manzana
  2. Naranja
  3. Banana
- Lácteos
  1. Leche
  2. Queso

Lista mixta:

1. Fruta
   - Manzana
   - Naranja
   - Banana
2. Lácteos
   - Leche
   - Queso

## Otros elementos — abbr, sub, sup, kbd, mark

#### Sintaxis

```markdown
<abbr title="Formato de Intercambio de Gráficos">GIF</abbr> es un formato de imagen bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Presiona <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> para finalizar la sesión.

La mayoría de las <mark>salamandras</mark> son nocturnas y cazan insectos, gusanos y otras criaturas pequeñas.
```

#### Resultado

<abbr title="Formato de Intercambio de Gráficos">GIF</abbr> es un formato de imagen bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Presiona <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> para finalizar la sesión.

La mayoría de las <mark>salamandras</mark> son nocturnas y cazan insectos, gusanos y otras criaturas pequeñas.
