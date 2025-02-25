/**
 * Define as propriedades para o componente `ProgressIndicator`.
 * 
 * @type ProgressIndicadorProps
 * 
 * @property {number} totalSteps - Número total de etapas no progresso (barra de progresso).
 * @property {number} duration - A duração total da animação.
 * @property {number} currentStep - A etapa atual do progresso.
 */
export type ProgressIndicadorProps = {
    totalSteps: number;
    duration: number;
    currentStep: number;
};
