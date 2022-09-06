const init = {
    taps:5,
    nt:3,
    hv_volt: 11000,
    hv_conn: 'Delta',
    lv_volt: 433,
    lv_conn: 'Star',
    getTaps(){
        return Array.from({length:this.taps},(_,t)=>t+1);
    },
    getStd(tap){
        return (1+(this.nt-tap)*.025)*(this.hv_volt/(this.hv_conn=="Star"?1.732:1))/(this.lv_volt/(this.lv_conn=="Star"?1.732:1));
    },
    getMin(tap) {
        return this.getStd(tap) * .995;
    },
    getMax(tap) {
        return this.getStd(tap)  * 1.005;
    }
}