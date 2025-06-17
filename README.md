# Starter Stories

Site minimalista para compartilhar histórias de empreendedores.

## Uso

Instale dependências e rode em desenvolvimento:

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` para ver o site.

## Admin

Um usuário administrador padrão é criado automaticamente com:

- **Email:** `admin@example.com`
- **Senha:** `admin`

Acesse `/admin/login` para entrar. Após logar, é possível criar, editar e excluir histórias.

## Adicionar histórias

1. Faça login em `/admin/login`.
2. Clique em **Nova história**.
3. Preencha os campos e salve.

## Editar ou excluir

Na página `/admin` há a lista de histórias com links para editar ou excluir cada uma delas.

## Submissões do formulário

O formulário em `/conte-sua-historia` grava as respostas em `submissions` no banco SQLite.
Para visualizar, acesse `/api/submissions` após fazer login (somente leitura via endpoint).

## Estrutura do banco

O arquivo `database.sqlite` é criado automaticamente e contém as tabelas `stories`, `submissions`, `users` e `newsletter`.

