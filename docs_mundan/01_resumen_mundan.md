# 01 — Resumen Ejecutivo del Caso WannaCry 2017

## Caso: Ataque de ransomware WannaCry (mayo 2017)

El 12 de mayo de 2017 se desencadenó uno de los ataques de ransomware más devastadores de la historia: **WannaCry**. El malware cifraba los archivos de los equipos infectados con Windows y exigía un rescate en Bitcoin —entre USD 300 y USD 600— para entregar la clave de descifrado. En menos de 24 horas comprometió más de 200.000 sistemas en 150 países.

## Vector de infección

El ataque explotó la vulnerabilidad **EternalBlue**, un exploit del protocolo SMBv1 de Windows desarrollado por la NSA y filtrado por el grupo **Shadow Brokers** en abril de 2017. Microsoft había publicado el parche **MS17-010** el 14 de marzo de 2017, casi dos meses antes del ataque, pero millones de organizaciones no lo habían aplicado.

## Impacto

- **Sistemas afectados:** +200.000 en 150 países
- **Sectores:** salud (NHS), telecomunicaciones (Telefónica), transporte, finanzas, gobierno
- **Daño estimado:** USD 4.000 millones
- **Kill switch:** El investigador Marcus Hutchins detuvo parte de la propagación registrando un dominio que el malware consultaba

## Actores principales

| Rol | Actor |
|-----|-------|
| Atacante | Lazarus Group (atribuido a Corea del Norte por EE.UU., RU y Australia) |
| Víctimas | +200.000 organizaciones en 150 países |
| Origen del exploit | NSA (EternalBlue, filtrado por Shadow Brokers) |
| Proveedor afectado | Microsoft (vulnerabilidad en SMBv1) |

## Fecha y duración

- **Inicio:** 12 de mayo de 2017
- **Contención parcial:** 12 de mayo de 2017 (kill switch)
- **Actividad residual:** semanas posteriores
