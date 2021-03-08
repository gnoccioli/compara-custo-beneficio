//Aluno: Glauber Noccioli de Souza
//Curso: Defesa Cibernética

//início do loop para repetir a operação caso o usuário solicite
for(;;){
  console.clear();
  alert('\n\nInforme os valores praticados para venda de Etanol e Gasolina. Entradas inválidas encerrarão o programa.');
  
  //inserção dos dados
	etanol = prompt('\n\nQual é o valor do Etanol:');
	gasolina = prompt('\n\nQual é o valor da Gasolina:');

  //validação dos dados inseridos
	valor_e = parseFloat(etanol.replace(",","."));
	valor_g = parseFloat(gasolina.replace(",","."));

	if ((isNaN(valor_e+valor_g)) || (valor_e <= 0) || (valor_g <= 0)) break;

  //cálculo 
	if ((valor_e / valor_g) == 0.7)
		{alert('\n\nTanto faz Etanol ou Gasolina. O custo por Km rodado será o mesmo.')}
	else {alert('\n\nÉ mais vantajoso abastecer com ' + (valor_e/valor_g > 0.7 ? 'Gasolina':'Etanol'))};
  
  //fechamento do loop de repetição
  repete = prompt('\n\nDeseja fazer um novo cálculo ? (digite sim para repetir)');
if (repete!='sim') break;};
