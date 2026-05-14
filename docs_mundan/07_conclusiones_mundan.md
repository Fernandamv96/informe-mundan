# 07 — Conclusiones y Recomendaciones

## Reflexión final

El caso WannaCry (2017) demuestra que los ataques de mayor impacto no explotan vulnerabilidades de día cero, sino la negligencia organizacional frente a parches disponibles. La combinación de infraestructura obsoleta, ausencia de segmentación de red y falta de respaldos convirtió un exploit conocido en una catástrofe global.

Desde la perspectiva jurídica chilena, las acciones del atacante configuran múltiples delitos bajo la Ley 21.459, con la afectación a infraestructura crítica como agravante. Sin embargo, la atribución a actores estatales extranjeros hace prácticamente imposible ejercer acciones penales en Chile, evidenciando la necesidad de cooperación internacional.

La Ley 19.628 presenta brechas críticas: no exige notificación de brechas ni establece sanciones disuasivas. La modernización normativa es urgente.

## Recomendaciones de seguridad

1. **Gestión proactiva de parches:** Implementar procesos con plazos máximos de aplicación según criticidad (ISO 27001, A.12.6.1).
2. **Segmentación de redes:** Dividir redes en segmentos con control de tráfico SMB para contener la propagación lateral.
3. **Política de respaldo 3-2-1:** 3 copias, 2 medios distintos, 1 fuera de sitio.
4. **Plan de respuesta a incidentes:** Documentado y probado periódicamente (ISO 27001, A.16).
5. **Deshabilitar protocolos obsoletos:** Inventariar y desactivar SMBv1 y otros protocolos sin soporte.
6. **Actualización normativa en Chile:** Avanzar en nueva Ley de Datos Personales (Boletín 11.144-07) y fortalecer la adhesión al Convenio de Budapest.

## Lección central

La ciberseguridad no es solo un problema técnico: es un problema de gestión, cultura organizacional y marco legal. WannaCry pudo haber sido contenido con un parche aplicado a tiempo. La brecha fue humana, no tecnológica.
