namespace Newman {
    /**
     * ReadVoltage
     */
    //% blockId=ReadVoltage block="電壓P1"
    export function ReadVolt(): number {
        return pins.analogReadPin(AnalogPin.P1) / 1024 * 5000;
    }

   
    /**
    * pHValue
    */
    //% blockId=pHValue block="pH值|(pH4:%Voltage_pH4 v)|(pH7:%Voltage_pH7 v)"
    //%blockGap=2 weight=1
    export function pH_Val(Voltage_pH4: number, Voltage_pH7: number): number {
        let slope = 0;
        let Numberercept = 0;
        let phValue = 0;

        slope = (7.0 - 4.0) / ((Voltage_pH7 - 1500.0) / 3.0 - (Voltage_pH4 - 1500.0) / 3.0);
        Numberercept = 7.0 - slope * (Voltage_pH7 - 1500.0) / 3.0;
        phValue = slope * ((pins.analogReadPin(AnalogPin.P1) / 1024 * 5000) - 1500) / 3.0 + Numberercept;

        return Math.round(phValue);
    }

    

}
