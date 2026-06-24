import { useState } from "react";

const CadCliente = ({ aoVoltar }) => {
  // Estado único para controlar todos os campos do formulário
  const [formData, setFormData] = useState({
    name: "",
    cpfCnpj: "",
    email: "",
    mobilePhone: "",
    address: "",
    addressNumber: "",
    province: "",
    postalCode: "",
  });

  // Estado para controlar o carregamento (evita cliques duplos no botão Salvar)
  const [carregando, setCarregando] = useState(false);

  // Função genérica para atualizar o estado de qualquer input dinamicamente
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((proximoEstado) => ({
      ...proximoEstado,
      [name]: value,
    }));
  };

  const salvarDados = async (e) => {
    e.preventDefault();
    setCarregando(true);

    try {
      // Faz o POST para o SEU backend Node (que criamos no padrão MVC)
      const response = await fetch("http://localhost:3001/api/clientes-asaas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const dados = await response.json();

      if (!response.ok) {
        // Captura o erro tratado que veio lá do seu Controller/Model
        throw new Error(dados.error || "Erro ao cadastrar cliente.");
      }

      alert("Cliente cadastrado com sucesso no Asaas!");
      aoVoltar(); // Volta automaticamente para a tabela de listagem
    } catch (err) {
      alert(`⚠️ Erro: ${err.message}`);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="container mt-4 p-4 bg-white rounded shadow-sm">
      <form onSubmit={salvarDados}>
        
        {/* Seção: Dados Básicos */}
        <h5 className="text-secondary mb-3">Dados Pessoais</h5>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <label className="form-label">Nome Completo / Razão Social *</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">CPF ou CNPJ (Apenas números) *</label>
            <input
              type="text"
              className="form-control"
              name="cpfCnpj"
              value={formData.cpfCnpj}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">E-mail *</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Celular / WhatsApp</label>
            <input
              type="text"
              className="form-control"
              name="mobilePhone"
              value={formData.mobilePhone}
              onChange={handleChange}
              placeholder="Ex: 21999999999"
            />
          </div>
        </div>

        {/* Seção: Endereço (Opcional, mas bom ter) */}
        <h5 className="text-secondary mb-3">Endereço</h5>
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <label className="form-label">CEP</label>
            <input
              type="text"
              className="form-control"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Logradouro (Rua/Av)</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Número</label>
            <input
              type="text"
              className="form-control"
              name="addressNumber"
              value={formData.addressNumber}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Bairro</label>
            <input
              type="text"
              className="form-control"
              name="province"
              value={formData.province}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="d-flex gap-2 justify-content-end border-top pt-3">
          <button
            type="button"
            className="btn btn-light"
            onClick={aoVoltar}
            disabled={carregando}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="btn btn-success px-4"
            disabled={carregando}
          >
            {carregando ? "Salvando..." : "Salvar Cliente"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadCliente;

/*
        //////// CAMPOS NECESSARIOS \\\\\\\\\


name: 'John Doe',
    cpfCnpj: '24971563792',
    email: 'john.doe@asaas.com.br',
    phone: '4738010919',
    mobilePhone: '4799376637',
    address: 'Av. Paulista',
    addressNumber: '150',
    complement: 'Sala 201',
    province: 'Centro',
    postalCode: '01310-000',
    externalReference: '12987382',
    notificationDisabled: false,
    additionalEmails: 'john.doe@asaas.com,john.doe.silva@asaas.com.br',
    municipalInscription: '46683695908',
    stateInscription: '646681195275',
    observations: 'ótimo pagador, nenhum problema até o momento',
    groupName: null,
    company: null,
    foreignCustomer: false

    */