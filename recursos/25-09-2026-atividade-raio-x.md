# Atividade Prática — Raio-X do Computador
**Organização e Arquitetura de Computadores II — 1º A — 25/09/2026**

## Parte A — Inspeção externa
Registre:
- conexão do monitor;
- USBs usadas/livres;
- rede;
- áudio;
- ventilação;
- cabos;
- duas informações que não podem ser confirmadas por fora.

## Parte B — Raio-X digital
Execute, quando disponíveis:
- `systeminfo`
- `wmic cpu get name`
- `wmic memorychip get capacity,speed`
- `wmic diskdrive get model,size`
- `wmic path win32_videocontroller get name`
- `wmic baseboard get manufacturer,product`
- `driverquery`

Ferramentas gráficas:
- `msinfo32`
- `dxdiag`
- `devmgmt.msc`

## Parte C — Inventário
Registre processador, RAM, disco, vídeo, placa-mãe, rede, alertas, potência da fonte e tipo de slot físico.

Para cada item, marque:
- **CONFIRMADO**
- **PROVÁVEL**
- **NÃO VERIFICÁVEL**

## Chamado 1 — Armazenamento
Adicionar disco SATA. O que já pode ser confirmado? O que ainda exige inspeção física?

## Chamado 2 — Placa de expansão
Chegou placa de rede PCI Express. É possível garantir a instalação só pelos dados do Windows?

## Chamado 3 — Upgrade de vídeo
A placa exige fonte de 400 W e ocupa dois slots. Que evidências precisam ser verificadas?

## Informações complementares
- Placa-mãe: PCIe x16 + PCIe x1.
- Fonte: 250 W.
- Gabinete: compacto.
- Placa de vídeo: exige 400 W e ocupa dois slots.
- Armazenamento: controladora SATA disponível; baia/conector/cabo ainda precisam de verificação física.

## Entrega
Para cada chamado, produzir um laudo com:
- **APROVADO / NÃO APROVADO / INFORMAÇÃO INSUFICIENTE**
- duas evidências;
- o que ainda falta verificar.
