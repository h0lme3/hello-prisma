init project with prisma

```bash
mkdir hello-prisma
cd hello-prisma

npm init -y
npm install prisma typescript ts-node @types/node --save-dev

npx tsc --init

npx prisma
npx prisma init
```

write model in schema.prisma file and migrate it

```bash
npx prisma migrate dev --name init
```
