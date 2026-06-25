import { useState, useEffect } from "react";

const EditCliente = ({ cliente, aoVoltar }) => {
  const [formData, setFormData] = useState({
    name: cliente?.name || "",
    cpfCnpj: cliente?.cpfCnpj || "",
    email: cliente?.email || "",
    company: cliente?.company || "",
    mobilePhone: cliente?.mobilePhone || "",
    address: cliente?.address || "",
    complement: cliente?.complement || "",
    addressNumber: cliente?.addressNumber || "",
    province: cliente?.province || "",
    postalCode: cliente?.postalCode || "",
    additionalEmails: cliente?.additionalEmails || "",
    observations: cliente?.observations || ""
  });

  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (cliente) {
      setFormData({
        name: cliente.name || "",
        cpfCnpj: cliente.cpfCnpj || "",
        email: cliente.email || "",
        company: cliente.company || "",
        mobilePhone: cliente.mobilePhone || "",
        address: cliente.address || "",
        complement: cliente.complement || "",
        addressNumber: cliente.addressNumber || "",
        province: cliente.province || "",
        postalCode: cliente.postalCode || "",
        additionalEmails: cliente.additionalEmails || "",
        observations: cliente.observations || ""
      });
    }
  }, [cliente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((proximoEstado) => ({
      ...proximoEstado,
      [name]: value,
    }));
  };

  const atualizarDados = async (e) => {
    e.preventDefault();
    setCarregando(true);

    try {
      const response = await fetch(`http://localhost:3001/api/clientes-asaas/${cliente.id}`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const dados = await response.json();

      if (!response.ok) {
        throw new Error(dados.error || "Erro ao atualizar cliente.");
      }

      alert("Cliente atualizado com sucesso no Asaas!");
      aoVoltar(); 
    } catch (err) {
      alert(`⚠️ Erro: ${err.message}`);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="container mt-4 p-4 bg-white rounded shadow-sm">
      <form onSubmit={atualizarDados}>
        
        <h5 className="text-secondary mb-3">Editar Dados Pessoais</h5>
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
            <label className="form-label">CPF ou CNPJ (Não alterável)</label>
            <input
              type="text"
              className="form-control bg-light"
              name="cpfCnpj"
              value={formData.cpfCnpj}
              disabled 
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
            <label className="form-label">Empresa</label>
            <input
              type="text"
              className="form-control"
              name="company"
              value={formData.company}
              onChange={handleChange}
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
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Email Adicional</label>
            <input
              type="text"
              className="form-control"
              name="additionalEmails"
              value={formData.additionalEmails}
              onChange={handleChange}
            />
          </div>
        </div>

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
          <div className="col-md-6">
            <label className="form-label">Complemento</label>
            <input
              type="text"
              className="form-control"
              name="complement"
              value={formData.complement}
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
        
        <div className="col-md-12 mb-4">
          <label className="form-label">Observação</label>
          <textarea
            className="form-control"
            name="observations"
            value={formData.observations}
            onChange={handleChange}
            rows={3}
          ></textarea>
        </div>

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
            className="btn btn-primary px-4"
            disabled={carregando}
          >
            {carregando ? "Atualizando..." : "Salvar Alterações"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCliente;