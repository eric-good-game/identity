# identity

Servicio de identidad del portafolio: usuarios, roles, empleados, sesiones y emisión de tokens JWT. Es el servicio compartido del que dependen Inventory, Tickets y Store.

Estado: **hito 0 (preparación)**. Todavía no hay código; el esqueleto de NestJS llega en el hito 2, el modelo de datos en el 3 y la autenticación en el 5.

## Qué hará

- Usuarios, roles y empleados (`User`, `Role`, `UserRole`, `Employee`, `RefreshToken`).
- Inicio de sesión, registro de clientes, renovación con rotación, cierre de sesión y cambio de contraseña.
- Firma de tokens con clave asimétrica (RS256) y publicación del JWKS en `/.well-known/jwks.json`.
- Gestión de usuarios y roles, solo para `admin`.

Cada sistema valida los tokens por su cuenta con el JWKS, sin llamar a Identity en cada petición.

## Stack previsto

NestJS con TypeScript, PostgreSQL con Prisma, `argon2` para contraseñas, `jose` para JWT y JWKS, `pino` para registros, `@nestjs/swagger` para OpenAPI y `pnpm` como gestor de paquetes.

## Documentación

Los documentos de este servicio viven temporalmente en `platform/docs` (hito 0) y se moverán a `docs/` en el hito 2:

| Documento | Tema |
|---|---|
| [02-identity-roles-and-permissions.md](https://github.com/eric-good-game/platform/blob/main/docs/02-identity-roles-and-permissions.md) | Roles y permisos |
| [03-identity-data-model.md](https://github.com/eric-good-game/platform/blob/main/docs/03-identity-data-model.md) | Modelo de datos |
| [04-identity-authentication-flow.md](https://github.com/eric-good-game/platform/blob/main/docs/04-identity-authentication-flow.md) | Tokens, sesiones y JWKS |
| [05-identity-api.md](https://github.com/eric-good-game/platform/blob/main/docs/05-identity-api.md) | Convenciones y endpoints |
| [08-identity-project-structure.md](https://github.com/eric-good-game/platform/blob/main/docs/08-identity-project-structure.md) | Estructura del código |
| [09-phase-1-implementation-plan.md](https://github.com/eric-good-game/platform/blob/main/docs/09-phase-1-implementation-plan.md) | Plan de hitos |

## Convenciones

- Commits en inglés con *Conventional Commits*; documentación en español.
- Ramas `feature/<hito>-<tema>` y rama `main` protegida con el CI obligatorio.
- Si un cambio de comportamiento deja un documento desfasado, se corrige en el mismo pull request.

Detalle: [CONTRIBUTING.md](CONTRIBUTING.md).

## Licencia

MIT. Ver [LICENSE](LICENSE).
