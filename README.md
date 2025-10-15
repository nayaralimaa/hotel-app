# 🏨 Hotel Reservation Platform

Uma plataforma moderna e intuitiva para gerenciar reservas de hotel com interface limpa e responsiva.

## 📋 Funcionalidades

- ✅ **Criar Reservas** - Adicione novas reservas com dados do hóspede
- ✅ **Listar Reservas** - Visualize todas as reservas em uma tabela organizada
- ✅ **Editar Reservas** - Modifique informações de reservas existentes
- ✅ **Deletar Reservas** - Remova reservas quando necessário
- ✅ **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile

## 🛠️ Tecnologias

- **Angular** - Framework frontend
- **Bootstrap 5** - Framework CSS para design responsivo
- **Bootstrap Icons** - Ícones vetoriais
- **TypeScript** - Linguagem de programação
- **Reactive Forms** - Validação de formulários

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/nayaralimaa/hotel-app.git
cd hotel-reservation
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
ng serve
```

4. Acesse a aplicação em `http://localhost:4200`

## 📱 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── home/              # Tela inicial
│   │   ├── reservation-list/  # Lista de reservas
│   │   └── reservation-form/  # Formulário de reserva
│   ├── services/
│   │   └── reservation.ts  # Lógica de negócio
│   └── models/
│       └── reservation.ts    # Modelo de dados
```

## 📝 Como Usar

1. **Na Home**: Clique em "Create a new reservation" para adicionar uma nova reserva
2. **Formulário**: Preencha os dados do hóspede, datas e número do quarto
3. **Lista**: Visualize todas as reservas com opções para editar ou deletar
4. **Ações**: Use os ícones para gerenciar suas reservas

```

## 📚 Validações

O formulário inclui validações para:
- Data de check-in obrigatória
- Data de check-out obrigatória
- Nome do hóspede obrigatório
- Email válido obrigatório
- Número do quarto obrigatório



## 📧 Suporte

Para dúvidas ou sugestões, entre em contato através das issues do repositório.
