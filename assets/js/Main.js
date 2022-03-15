class ContaEnegia {
    constructor() {
        this.display = document.querySelector('.display');

        this.inicia = () => {
            this.capturaCliques();
            this.capA();
            this.capD();
            this.capF();
            this.capR();
        };
        this.capA = () => {
            document.addEventListener('keypress', e => {
                if (e.keyCode === 65 || e.keyCode === 97) {
                    if (this.display.value < 10)
                        this.add();
                }
            });
        };

        this.capD = () => {
            document.addEventListener('keypress', e => {
                if (e.keyCode === 68 || e.keyCode === 100) {
                    if (this.display.value > 0)
                        this.minus();
                }
            });
        };

        this.capF = () => {
            document.addEventListener('keypress', e => {
                if (e.keyCode === 70 || e.keyCode === 102) {
                    if (this.display.value >= 10 || this.display.value >= 9) {
                        this.display.value = 10;
                    } else
                        this.display.value = parseInt(this.display.value) + 2;
                }
            });
        };
        this.capR = () => {
            document.addEventListener('keypress', e => {
                if (e.keyCode === 82 || e.keyCode === 114) {
                    this.ref();
                }
            });
        };

        this.capturaCliques = () => {
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-mais'))
                    this.add();
                this.maiorQueDez();
                if (el.classList.contains('btn-menos'))
                    this.minus();
                this.maiorQueDez();
                if (el.classList.contains('btn-ref'))
                    this.ref();
                this.maiorQueDez();
                if (el.classList.contains('btn-next'))
                    this.display.value = parseInt(this.display.value) + 2;
                this.maiorQueDez();
            });
        };

        this.addNumDisplay = el => {

            this.display.value += el.innerText;
            this.display.focus();

        };
        this.add = () => this.display.value = parseInt(this.display.value) + 1;

        this.minus = () => this.display.value = parseInt(this.display.value) - 1;

        this.ref = () => this.display.value = 3;

        this.maiorQueDez = () => {
            if (this.display.value >= 10) {
                this.display.value = 10;
            }
            if (this.display.value < 0) {
                this.display.value = 0;
            }
        };
    }
};

const contaEnergia = new ContaEnegia();
contaEnergia.inicia();