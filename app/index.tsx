import { View } from 'react-native';
import { globalStyles } from '@/assets/styles/global-styles';
import ThemeText from '@/components/ThemeText';
import CalculatorButton from '@/components/CalculatorButton';
import { Colors } from '@/constants/Colors';
import { useCalculator } from '@/hooks/useCalculator';

const CalculatorApp = () => {
  const {
    formula,
    previousNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateFinalResult
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Results */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        <ThemeText variant="h2">
          {formula === previousNumber ? '' : previousNumber}
        </ThemeText>
      </View>

      {/* Buttons rows */}
      <View style={globalStyles.row}>
        <CalculatorButton
          blackText
          color={Colors.lightGray}
          label="C"
          onPress={clean}
        />
        <CalculatorButton
          blackText
          color={Colors.lightGray}
          label="+/-"
          onPress={toggleSign}
        />
        <CalculatorButton
          blackText
          color={Colors.lightGray}
          label="del"
          onPress={deleteLast}
        />
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={divideOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => buildNumber('7')} />
        <CalculatorButton label="8" onPress={() => buildNumber('8')} />
        <CalculatorButton label="9" onPress={() => buildNumber('9')} />
        <CalculatorButton
          label="X"
          color={Colors.orange}
          onPress={multiplyOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => buildNumber('4')} />
        <CalculatorButton label="5" onPress={() => buildNumber('5')} />
        <CalculatorButton label="6" onPress={() => buildNumber('6')} />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={substractOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => buildNumber('1')} />
        <CalculatorButton label="2" onPress={() => buildNumber('2')} />
        <CalculatorButton label="3" onPress={() => buildNumber('3')} />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={addOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          doubleSize
          onPress={() => buildNumber('0')}
        />
        <CalculatorButton label="." onPress={() => buildNumber('.')} />
        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={calculateFinalResult}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
