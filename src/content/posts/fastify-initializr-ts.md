---
title: "fastify-initializr-ts: Construindo uma CLI boostrap para API's Typescript"
description: "Construindo uma CLI boostrap para API's Typescript"
pubDatetime: 2026-08-29T00:00:00Z
author: "Gustavo Lobo"
featured: true
draft: false
tags:
    - Fastify
    - Prisma
    - TypeScript
    - Swagger
    - API
hideEditPost: false
timezone: "America/Sao_Paulo"
---


Criar uma API não deveria começar com meia hora de configuração.

Se a ideia é experimentar uma tecnologia, criar um MVP, desenvolver um backend para um frontend ou simplesmente colocar uma ideia no ar, o primeiro objetivo deveria ser chegar rapidamente ao ponto em que podemos escrever **código de negócio**.

Imagine que você acabou de ter uma ideia para uma API.

Pode ser:

- uma API para um projeto pessoal;
- um backend para React, Vue ou Next.js;
- um microserviço;
- um MVP;
- uma API para estudos;
- um projeto para experimentar uma biblioteca;
- ou simplesmente aquela ideia que você quer tirar do papel.


<iframe src="https://mermaid.live/embed?theme=dark&look=classic&mode=dark#pako:eNpFjr1KxEAQx19lmDr3AikEL7lCsBIrXYthdy5Zb5MNsxtFjgN9ABGsRASxEmxt7H0TX0Afwc166nT_rx-zRu0NY4lL5891SxJh_0D1kG73WOHX4-0T7Bm2pPAEZrMdmGf3_hIqsSQwiD_l6FP6M5rnUpVKHw_Xn283sAha-IwFhBshMAw9N--v2v5vqrypM_j5BQ45RJK_tM7pYiLeXU3EmgfnL1KOBTZiDZZRRi6wY-lokrhWGFvuWGGp0JCsFBYKnfer7GhHIVitcJMIA_VH3ne_EPFj02K5JBeSGgdDkWtL6fVtZfMNg8JqDg" width="100%" height="480" style="border:0" loading="lazy" title="Mermaid diagram" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>

Porém, o processo muitas vezes acaba sendo, não a
complexidade, mas a **repetição**.


É exatamente aí que entra um gerador **boostrap**.

> [!TIP] 
> A ideia central
> 
> Um boostrap não precisa resolver todos os problemas de uma aplicação.
> Ele precisa eliminar o trabalho repetitivo que acontece antes de a 
> aplicação realmente começar.

---

## Boostraps

Em tecnologia, bootstrap é o processo de iniciar um sistema a partir de uma estrutura mínima que permite sua evolução.

No desenvolvimento de software, o termo também é usado para descrever ferramentas que automatizam a criação dessa estrutura inicial, como arquivos, configurações, dependências e convenções.

A ideia é simples: reduzir o trabalho necessário para sair do zero e chegar rapidamente a um projeto funcional.

Um exemplo para projetos backend é o <a href="https://docs.spring.io/initializr/docs/current/reference/html/" target="_blank">Spring Initializr</a>, do ecossistema Spring. Ele permite definir características como linguagem, sistema de build e dependências, e então gera a estrutura inicial do projeto.


No frontend, esse conceito já é bastante familiar através do uso de **CLI's**.

> [!Info]- CLI (Command-Line Interface)
> Interface de Linha de Comando,
> é uma forma de interagir com um programa através
> de comandos digitados no terminal, em vez de utilizar uma interface gráfica.



Em vez de criar manualmente toda a estrutura de uma aplicação, configurar TypeScript, ferramentas de build, dependências e uma série de outras peças, utilizamos ferramentas de inicialização.

```bash
npm create alguma-coisa
```

Ou:

```bash
npx alguma-cli
```

A CLI pergunta algumas coisas, cria os arquivos e entrega um projeto pronto para desenvolver.


Entretanto, diferente das **CLIs** práticas e minimalistas dos frameworks frontend,
a curva de aprendizagem dos frameworks (.NET ou Spring) e linguagens backend
mais usados no mercado,
e até a experiência de implantação desses sistemas,
tornam isso uma experiência bem menos proveitosa.

Mas uma solução para esse problema não precisaria exatamente de uma aplicação enterprise com dezenas de abstrações ou sequer um framework novo.

Apenas um **bom ponto de partida**.

---

# fastify-initializr-ts

O [fastify-initializr-ts](https://github.com/gfLobo/fastify-initializr-ts) é uma ferramenta open source que gera um boilerplate moderno de API utilizando:

- Fastify;
- TypeScript;
- Zod;
- OpenAPI/Swagger;
- fastify-type-provider-zod;
- rate limiting;
- Prisma opcional;
- suporte a múltiplos bancos de dados.

Faça uma Única vez a instalação global:

```bash
npm install -g fastify-initializr-ts
```

Comece a criar novos projetos backend com um único comando:

```bash
npx fastify-initializr-ts
```

Depois disso, a CLI conduz o desenvolvedor pelo processo de criação.

> [!TIP]
> Experiência desejada
> 
> A CLI foi pensada para transformar a criação inicial do backend em
> um pequeno wizard: algumas decisões, alguns arquivos gerados e,
> finalmente, uma API pronta para ser desenvolvida.

---

## Por que Fastify?

![Fastify](https://raw.githubusercontent.com/fastify/graphics/HEAD/fastify-landscape-outlined.svg)


O Fastify é um framework HTTP para Node.js focado em baixo overhead, performance e experiência de desenvolvimento. Rápido desenvolvimento
implantação prática.

Uma estrutura extremamente básica do Fastify para uma API se pareceria com isto:
```typescript
import Fastify from "fastify";

const app = Fastify();

app.get("/hello", async () => {
  return {
    message: "Hello World",
  };
});

app.listen({
  port: 3000,
});
```
Simples, certo? 

Vamos ver como podemos organizar
de maneira mais consistente para adaptar essa estrutura num
eventual crescimento de projeto mais a frente.

Um dos aspectos mais interessantes do Fastify para esse projeto é sua arquitetura baseada em **plugins**.

<iframe src="https://mermaid.live/embed?theme=dark&look=classic&mode=dark#pako:eNp9jr1uwzAMhF9F4Oy8gIcC-evkIUi2Vh0ImZaJSFZAUQmCIO9exUmATuV23x15vIFLPUELQ0gXN6Ko6fZ2MnVW3xZ2oXiesoUfs1h8mGVFn5iVh2tFz9i6sn1S_De0qexwQe9J3rHV09k-1lHJdBxZ_5jQgBfuoVUp1EAkifiQcLOgI0Wy0FroUY4WGgshpeNMXMCc2c0wkyvCeu3oTGF2swq7WnOv5084faUU3w2Sih-hHTDkqsqpr19tGL3gK3L_BdbLYHA" width="100%" height="480" style="border:0" loading="lazy" title="Mermaid diagram" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>

Plugins podem encapsular funcionalidades e manter responsabilidades separadas, algo que combina muito bem com a proposta de um boilerplate.

---

## Zod: Validando tipos e definindo schemas

<img 
  src="https://raw.githubusercontent.com/colinhacks/zod/main/logo.svg" 
  alt="Zod"
  style="max-width: 200px; width: 100%; height: auto;"
/>

Zod é utilizado para validação de dados em runtime e definição de schemas.

O [Zod](https://zod.dev/) é uma biblioteca de validação orientada a TypeScript.

A ideia é definir um schema que descreve os dados esperados.

```typescript
import { z } from "zod";

const SignupSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string().min(8),
});
```

Podemos então validar dados externos:

```typescript
app.post("/signup", {
  schema: {
    body: SignupSchema,
  },
}, async (request, reply) => {
  return reply.status(201).send({
    message: "User created",
  });
});
```

A vantagem é que o schema participa tanto da validação quanto da modelagem dos dados.

<iframe src="https://mermaid.live/embed?theme=dark&look=classic&mode=dark#pako:eNo9j0FugzAQRa8ymjWRsuiKRaoSmmRVVYVV6i4s2wErwFADqaKQA_QYVY_QI3CxDibBK89_3_97LqhIGwzxUNCXyqVrIY1FBXye3gXu0vQV3sxnZ5pW4AcsFiuIWL9JEJE-sz49iDxeM96ThkTlppQzXHsYXwQO33Aafgqr6VHgVVQTj0fevwy_1MPzvflhuZwDJkNiyx42zGOpqYGT5JzxNts2vmfLjvRcm0Q5W7cz3Hq48wtkToI2UJls-FOW2IMBZs5qDFvXmQBL40o5jsifbnkZIzAUqKU7CgwEFkRHr6hCNo1VvAwn1LLaE5X3EEddlmN4kEXDU1dr2ZrYSi6_Wa7_0gp6Qg" width="100%" height="480" style="border:0" loading="lazy" title="Mermaid diagram" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>

No `fastify-initializr-ts`, essa integração é complementada pelo `fastify-type-provider-zod`.


> [!TIP]+ Uma consequência interessante  
> Quando schema, validação e tipagem estão próximos, reduzimos a  
> quantidade de contratos duplicados espalhados pela aplicação.

---

## Swagger e OpenAPI: Documentando a API

Aqui aparece outro problema bastante comum.

A aplicação cresce. As rotas aumentam. Entram parâmetros, headers e diferentes respostas.

E, depois de algum tempo, alguém pergunta:

> Como essa API funciona mesmo?

Se não existe documentação, começamos uma pequena sessão de arqueologia no código.

É preciso procurar a rota, descobrir o método HTTP, descobrir os parâmetros, descobrir o body, descobrir as respostas possíveis e então testar manualmente.

O projeto tenta resolver isso desde o primeiro minuto.

O template utiliza:

```text
@fastify/swagger
@fastify/swagger-ui
```

O `@fastify/swagger` integra a geração da especificação OpenAPI ao Fastify.

Já o `@fastify/swagger-ui` fornece uma interface visual para explorar a documentação.

<iframe src="https://mermaid.live/embed?theme=dark&look=classic&mode=dark#pako:eNp9lM2O0zAUhV_FcjcgtTRp86-qIj-2xArEsIKwcBOnjZrWlZOoVKPZsQcJicWwABa8A8_DC8Aj4CZ2STMKzepcnfvl3Huj3sKEpRR6MCvYMdkQXoFXQbwH4uc_ehPDX_ffFys-XS5WS0zKKs9O4CWrK7qYrpYxfPu4tQZn65-vnz4q702yoTtybQpb05dvv39-UL6nWQudlkeyXlN-3RFJ7Htlf36ge__Fs2sXal2ff_yHO6nz6yYs0feqQ2BBxJLyn01uAUwmSyBXEjQilPM0IpJRG4FkokZg-SYweSKUr4BJQcoyohng5z2CLC8Kb4TmeIajcVlxtqXeaKa7Fp5LOTnmabXxZod344QVjHsjLTJsX-_hymblkofnyMTmheeGMzvQBnmGrxtO2Oe1m1MBHWwi9wI0Qh-bw0A9MNFM6wGZOB455Cohxg7SL0CMQ12zB4FmZGhzuwesO6w50jos19GGwyHL1LV-uFScXtFCZKDwQkOujqzhWziOhgx8dVzxzTS37ZYCeZ9uLVQ77hYjtaduEYlZuxo3edVLi3y_valOBQUpzUhdVEBltzQ7coIH2ftt5qXBRefn4bCykJJS_EVwcvIsYMR7OIZrnqfQq3hNx3BH-Y6cJbyNYSWmpTH0YpgSvo3hOIYFY9um0gyRJzG8E4QD2b9mbKcgYnPrDfQyUpRC1YeUVDTKyZoTabn7CyBFgZY" width="100%" height="480" style="border:0" loading="lazy" title="Mermaid diagram" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>

Depois de iniciar a aplicação, a documentação fica disponível em:

```text
http://localhost:3000/docs
```

Enquanto a API roda em:

```text
http://localhost:3000
```

Isso muda bastante a experiência de desenvolvimento.

Em vez de depender imediatamente de Postman, Insomnia ou comandos `curl`, temos uma interface visual para descobrir e testar os endpoints.

---

## Prisma: Conectando aos bancos de dados. 


![Prisma](https://avatars.githubusercontent.com/u/17219288?s=200&v=4)

O [Prisma](https://www.prisma.io/) foi escolhido como ORM *<u>opcional</u>*.

A proposta é particularmente interessante para aplicações TypeScript porque oferece acesso tipado ao banco, migrations e ferramentas para trabalhar com o modelo de dados.


> [!TIP]+ Banco sob demanda  
> A escolha do banco acontece durante a criação do projeto. Isso permite  
> manter aplicações simples realmente simples, enquanto projetos que  
> precisam de persistência já recebem a estrutura necessária.


Durante a criação do projeto, a CLI pergunta se queremos configurar um banco.

<iframe src="https://mermaid.live/embed?theme=dark&look=classic&mode=dark#pako:eNq9lN1u0zAUx1_lyNO4yljbrR-JpqG1afcFaKjjZoQLx3ZSUyeu7JSt2iYNwS0CCSSmCWlCSAgh7uEa3mQvAI-Ak6Zd101Cu9iqWpHP_5yf_z6xs4-IpAw5KBByl3SwSmDb9WIwv9lZOHt_dBP_Mb8l-nsSeorHhPewuPl1hyusPPHQ39OTI4CG4lgZA_IZS6SHnsLc3DLU9z30WJu4j2MigTKgmEp9z0OHI0I9TTx4-PuzPICGoZ2dfII6Jl0WU9AsGlYu-Wp-eUlHWIjlFtYJDwbw6wdsD3qsTRTvJelsR9L00d7FYcjU0vww3Vi5uFSbRwfgZr4_vPrz8w1AUxMpOmza5USlm-2mmRW9PQbYkjoJFWs_up8lnae0hinfAR4MLqurmfruC4DReMKm5LVMfv3SFMs4lG59Sl_P9G-nWTm0mXrO1FTKRtrB4xfZthqSdJXEpJODhnlNuAMtM1bNWDNj3YyNrHYzrf34FbYUN63LS27tADfNWxWm6bd0cInAWrssAJ2kNzXgQjgzVbKAGbV0omSXOTMVWqpR2zKHQypnJgiCXJnb5TTpOKXe3hSLMsI1l3GOC8o2K_hjHLWr1ULlGrhYun6OKjBcZvYYVSjVFkn1Os5wgn2s2chZLcABGeOIT8usOMIVWcle8C8Si3fLl5hSRTmuWPDtWvHcXdmuVP7TtwkWrAxfwmSoPu7lZLSRtWQy4l6Z17Ra1qq1Zq1bG-OdT-qbqfeRB8HjbjsZCHPrWYD7IoHRPuxFvODXrjCPLBQqTpGTqD6zUMRUhNMpMp-7pMMic7EdD1Gsuh6yPCSk7GaRbHVOzNfPEHo43pEyGkGU7Icd5ARYaDPr94xv5nIcKpynHP4DXueH7A" width="100%" height="480" style="border:0" loading="lazy" title="Mermaid diagram" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>

Atualmente a CLI oferece suporte aos providers definidos pelo projeto.

| Provider    | Exemplos                             |
|-------------|--------------------------------------|
| PostgreSQL  | Supabase, Neon ou instalação própria |
| MySQL       | Instalações MySQL compatíveis        |
| SQLite      | Ambiente local e projetos menores    |
| MongoDB     | MongoDB                              |
| SQL Server  | Microsoft SQL Server                 |
| CockroachDB | CockroachDB                          |

A partir da escolha, a CLI adapta a infraestrutura do projeto.

```text
fastify-ts/
├── lib/
│   └── prisma.ts
├── prisma/
├── prisma.config.ts
├── src/
│   ├── controllers/
│   ├── plugins/
│   ├── types/
│   └── server.ts
└── package.json
```
---

## Rate limiting

Outra integração presente no template é o rate limiting através do plugin do ecossistema Fastify.

Isso adiciona uma camada básica para limitar a quantidade de requisições processadas.

> [!WARNING]- Rate limiting não é segurança completa  
> Rate limiting é apenas uma camada de proteção. Ele não substitui  
> autenticação, autorização, validação, proteção contra abuso,  
> configuração adequada de infraestrutura ou outras medidas de segurança.

---

## Deploy
Para implantação dessa aplicação pode ser feito o uso de serviços gratuitos
comuns para aplicações baseadas em Javascript e NodeJS como a [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/) e [Cloudflare Pages](https://www.cloudflare.com/products/pages/).