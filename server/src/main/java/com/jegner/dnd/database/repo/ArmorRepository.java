package com.jegner.dnd.database.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jegner.dnd.model.item.Armor;

@Repository
public interface ArmorRepository extends JpaRepository<Armor, Long> {

}
