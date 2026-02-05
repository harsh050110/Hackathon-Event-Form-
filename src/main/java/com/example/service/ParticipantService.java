package com.example.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.model.Participant;
import com.example.repository.ParticipantRepository;

@Service
public class ParticipantService {

    @Autowired
    private ParticipantRepository repo;

    public Participant save(Participant p) {
        return repo.save(p);
    }

    public List<Participant> getAll() {
        return repo.findAll();
    }
}
