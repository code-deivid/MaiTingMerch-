// contact.jsx — streetwear brief form
function Field({ label, name, type = 'text', value, onChange, textarea, options, required, placeholder }) {
  return (
    <div className="ff">
      <label htmlFor={name} className="ff-label">
        {label}{required && <span className="ff-req">*</span>}
      </label>
      {options ? (
        <select id={name} name={name} value={value} onChange={onChange} className="ff-input" data-cursor="hover">
          <option value="">Selecciona una opción</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : textarea ? (
        <textarea id={name} name={name} value={value} onChange={onChange} rows={5} className="ff-input ff-textarea"
                  placeholder={placeholder} data-cursor="hover" />
      ) : (
        <input id={name} name={name} type={type} value={value} onChange={onChange} className="ff-input"
               placeholder={placeholder} data-cursor="hover" />
      )}
    </div>
  );
}

function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', project: '', need: '', message: '' });
  const [status, setStatus] = React.useState('');
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus('error'); return; }
    setStatus('sending');
    setTimeout(() => setStatus('ok'), 900);
  };

  return (
    <section className="contact contact-v3" id="contacto" data-screen-label="06 Contacto">
      <div className="contact-poster reveal">
        <span className="tape tape-a"></span>
        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1300&q=80" alt="Concierto y público" />
        <strong>BRIEF / DROP</strong>
      </div>

      <form className="form-box form-v3 reveal d1" onSubmit={submit}>
        <div className="form-box-head">
          <div className="form-box-tag">Nuevo proyecto</div>
          <h2 className="form-box-title">Cuéntanos tu drop</h2>
          <p className="form-box-sub">Brief rápido, estética de calle y respuesta en menos de 48h.</p>
        </div>

        <div className="form-grid">
          <Field label="Nombre" name="name" value={form.name} onChange={upd('name')} placeholder="Tu nombre" required />
          <Field label="Email" name="email" type="email" value={form.email} onChange={upd('email')} placeholder="tu@email.com" required />
          <Field label="Teléfono" name="phone" type="tel" value={form.phone} onChange={upd('phone')} placeholder="+34 ..." />
          <Field label="Artista / Marca" name="project" value={form.project} onChange={upd('project')} placeholder="Nombre del proyecto" />
          <div className="ff-full">
            <Field label="Qué necesitas" name="need" value={form.need} onChange={upd('need')}
                   options={['Diseño + producción', 'Merch para gira', 'Stand de festival', 'Tienda online', 'Pop-up / activación', 'Todo el 360º']} />
          </div>
          <div className="ff-full">
            <Field label="Brief" name="message" value={form.message} onChange={upd('message')} textarea required
                   placeholder="Fechas, referencias, tipo de prendas, volumen, ideas, estilo..." />
          </div>
        </div>

        <div className="form-cta">
          <div className={`form-status ${status === 'ok' ? 'ok' : status === 'error' ? 'err' : ''}`}>
            {status === 'sending' && 'ENVIANDO...'}
            {status === 'ok' && '✓ BRIEF RECIBIDO — TE ESCRIBIMOS EN 48H'}
            {status === 'error' && '⚠ FALTAN CAMPOS OBLIGATORIOS'}
            {!status && 'Respuesta en menos de 48h'}
          </div>
          <button type="submit" className="btn-primary" data-cursor="hover">ENVIAR BRIEF</button>
        </div>
      </form>
    </section>
  );
}

window.Contact = Contact;
