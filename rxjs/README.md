# RxJS Devschool

Este é um projeto para facilitar o aprendizado de RxJS de forma visual, utilizando como base o código fonte do [RxViz](https://rxviz.com/).

Esse projeto é feito em React mas não afetará nada os nossos exemplos, o foco será aprender somente a trabalhar com Observables, e atualmente o RxViz possui a melhor visualização para isso.

# Instalação

Rodar `npm install`

# Rodar projeto

Rodar `npm run dev` e acessar http://localhost:3000

# Modificar exemplo

O exemplo a ser editado é o pages/index.tsx, que é o único arquivo Typescript do projeto. 


# Exercícios

1. Faça um observable que transforme os valores de interval$ em um valor constante (mapTo)
2. Faça um observable que transforme os valores de interval$ em um valor calculado (map)
3. Faça um observable que emita a soma dos valores emitidos pelo interval$ toda vez que ele emitir um valor (scan)
4. Faça um observable que sempre que se fazer um click$, ele dispare uma requisição (simulateRequest) e emita o resultado no mesmo observable (mergeMap)
5. Faça um observable que sempre que se um fazer click$, ele  dispare uma requisição (simulateRequest) e emita o resultado no mesmo observable, mas se for clickado uma outra vez antes da requisição terminar, ele cancele a requisição anterior e passe a escutar somente o resultado da requisição mais recente (switchMap)
6. Faça um observable que sempre que se um fazer click$, ele  dispare uma requisição (simulateRequest) e emita o resultado no mesmo observable, mas se for clickado mais vezes antes da requisição terminar, ele ignore os cliques até que a requisição seja terminada (exhaustMap)
7. Faça um observable que emita somente quando o usuário pressionar a key$ de "enter". (filter)
8. Faça um observable que emita o valor total do input de texto somente quando o usuário parar de digitar por mais de 300 milisegundos (throttleTime)
9. Usando o observable do exercício 8, Simule uma situação de "pesquisa", ou seja, crie um novo observable que dispara uma requisição ao receber esse valor do input, e considera somente a última requisição caso seja emitido outro valor de input. (switchMap)
10. Faça com que o observable de key$ não emita valores repetidos em sequência (distinctUntilChanged)
11. Faça um observable que combine os últimos valores emitidos pelo interval$, click$ e input$ e emita sua combinação como uma tupla (combineLatest)
12. Faça um observable que periodicamente (interval$) emita o último valor digitado no input (withLatestFrom + map)
13. Faça um observable que comece a emitir os valores de mouseMove$ somente quando ele estiver com o mouse pressionado (mouseDown$) e para de emitir quando o mouse levantar (mouseUp$)