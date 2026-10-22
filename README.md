# Folha Ponto

Aplicativo pessoal de registro de jornada, em português, sem dependências externas.

## Executar

Requer Python 3 e Node.js 18 ou superior para os testes.

```sh
npm test
npm start
```

O servidor usa a porta 3000. Registre entrada e saída e, opcionalmente, início e fim do intervalo. Cada lançamento deve começar e terminar no mesmo dia. Para jornadas noturnas, separe os lançamentos por data. A meta usada no saldo é de 8 horas por lançamento.

Os registros ficam apenas no armazenamento local do navegador utilizado. Exporte CSV regularmente para guardar uma cópia. Não há login, sincronização ou controle oficial de ponto trabalhista nesta versão.
