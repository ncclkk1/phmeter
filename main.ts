enum MyPort {
    P0,
    P1,
    P2,
    P3
}
namespace Newman {
    /**
     * ReadVoltage
     */
    //% blockId=ReadVoltage block="ReadVoltage port %Port"
    export function ReadVolt(Port: MyPort): number {
        if (Port==0){
            return pins.analogReadPin(AnalogPin.P0) / 1024 * 5000;
        } else if (Port == 1){
            return pins.analogReadPin(AnalogPin.P1) / 1024 * 5000;
        } else if (Port == 2) {
                return pins.analogReadPin(AnalogPin.P2) / 1024 * 5000;
        }else{
            return pins.analogReadPin(AnalogPin.P3) / 1024 * 5000;
        }
        
    }

   
    /**
    * pHValue
    */
    //% blockId=pHValue block="pH值 - 埠:%Port|pH4=%Voltage_pH4|pH7=%Voltage_pH7"
    //%blockGap=2 weight=1
    export function pH_Val(Port: MyPort, Voltage_pH4: number, Voltage_pH7: number): number {
        let slope = 0;
        let Numberercept = 0;
        let phValue = 0;

        slope = (7 - 4) / ((Voltage_pH7 - 1500) / 3 - (Voltage_pH4 - 1500) / 3);
        Numberercept = 7 - slope * (Voltage_pH7 - 1500) / 3;
        if (Port == 0) {
            phValue = slope * ((pins.analogReadPin(AnalogPin.P0) / 1024 * 5000) - 1500) / 3 + Numberercept;
        } if (Port == 1) {
            phValue = slope * ((pins.analogReadPin(AnalogPin.P1) / 1024 * 5000) - 1500) / 3 + Numberercept;
        } if (Port == 2) {
            phValue = slope * ((pins.analogReadPin(AnalogPin.P2) / 1024 * 5000) - 1500) / 3 + Numberercept;
        } else {
            phValue = slope * ((pins.analogReadPin(AnalogPin.P3) / 1024 * 5000) - 1500) / 3 + Numberercept;
        }

        return Math.round(phValue);
    }

    

}