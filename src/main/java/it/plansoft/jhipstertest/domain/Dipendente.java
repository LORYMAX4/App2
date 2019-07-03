package it.plansoft.jhipstertest.domain;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

/**
 * A Dipendente.
 */
@Entity
@Table(name = "dipendente")
public class Dipendente implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "cognome")
    private String cognome;

    @Column(name = "email")
    private String email;

    @Column(name = "numero_di_telefono")
    private String numeroDiTelefono;

    @Column(name = "data_assunzione")
    private Instant dataAssunzione;

    @ManyToMany
    @JoinTable(name = "dipendente_skill",
               joinColumns = @JoinColumn(name = "dipendente_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "skill_id", referencedColumnName = "id"))
    private Set<Skill> skills = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public Dipendente nome(String nome) {
        this.nome = nome;
        return this;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public Dipendente cognome(String cognome) {
        this.cognome = cognome;
        return this;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public String getEmail() {
        return email;
    }

    public Dipendente email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNumeroDiTelefono() {
        return numeroDiTelefono;
    }

    public Dipendente numeroDiTelefono(String numeroDiTelefono) {
        this.numeroDiTelefono = numeroDiTelefono;
        return this;
    }

    public void setNumeroDiTelefono(String numeroDiTelefono) {
        this.numeroDiTelefono = numeroDiTelefono;
    }

    public Instant getDataAssunzione() {
        return dataAssunzione;
    }

    public Dipendente dataAssunzione(Instant dataAssunzione) {
        this.dataAssunzione = dataAssunzione;
        return this;
    }

    public void setDataAssunzione(Instant dataAssunzione) {
        this.dataAssunzione = dataAssunzione;
    }

    public Set<Skill> getSkills() {
        return skills;
    }

    public Dipendente skills(Set<Skill> skills) {
        this.skills = skills;
        return this;
    }

    public Dipendente addSkill(Skill skill) {
        this.skills.add(skill);
        skill.getDipendentes().add(this);
        return this;
    }

    public Dipendente removeSkill(Skill skill) {
        this.skills.remove(skill);
        skill.getDipendentes().remove(this);
        return this;
    }

    public void setSkills(Set<Skill> skills) {
        this.skills = skills;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Dipendente)) {
            return false;
        }
        return id != null && id.equals(((Dipendente) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Dipendente{" +
            "id=" + getId() +
            ", nome='" + getNome() + "'" +
            ", cognome='" + getCognome() + "'" +
            ", email='" + getEmail() + "'" +
            ", numeroDiTelefono='" + getNumeroDiTelefono() + "'" +
            ", dataAssunzione='" + getDataAssunzione() + "'" +
            "}";
    }
}
