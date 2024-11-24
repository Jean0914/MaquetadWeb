const { createApp } = Vue;

createApp({
    data() {
        return {
            step: 1, // Etapa actual del formulario
            data: {
                dimensiones: '',
                peso: '',
                origen: '',
                destino: '',
                remitente: '',
                destinatario: '',
                direccion: ''
            },
            opciones: [
                { empresa: 'DHL', tarifa: 120 },
                { empresa: 'FedEx', tarifa: 100 },
                { empresa: 'Estafeta', tarifa: 90 }
            ]
        };
    },
    methods: {
        nextStep() {
            if (this.step < 4) this.step++;
        },
        prevStep() {
            if (this.step > 1) this.step--;
        },
        seleccionarOpcion(index) {
            console.log(`Opción seleccionada: ${this.opciones[index].empresa}`);
            this.nextStep();
        },
        resetForm() {
            this.step = 1;
            this.data = {
                dimensiones: '',
                peso: '',
                origen: '',
                destino: '',
                remitente: '',
                destinatario: '',
                direccion: ''
            };
        }
    }
}).mount('#app');